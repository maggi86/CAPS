  import router from "@/router";
  import {
    createStore
  } from "vuex";
  import {
    getData,
    getSingle,
    setData
  } from "./queries";
  let live = "https://m-rings.herokuapp.com/";
  import bcrypt from "bcryptjs";

  export default createStore({
    state: {
      user: null || JSON.parse(localStorage.getItem("user")),
      prods: null,
      prod: null,
      cart: null,
      token: null || localStorage.getItem("token"),
      admin: false,
      msg: null,
      me: false,
    },
    getters: {},
    mutations: {
      setUser: (state, user) => {
        state.user = user;
        localStorage.setItem("user", JSON.stringify(user));
      },
      setProds: (state, prods) => {
        state.prods = prods;
      },
      setProd: (state, prod) => {
        state.prod = prod;
      },
      setMsg: (state, msg) => {
        state.msg = msg;
      },
      setCart: (state, cart) => {
        console.log(cart);
        if (cart === null) {
          state.cart = null;
          console.log("object");
        } else {
          state.cart = cart;
        }
      },
      setToken: (state, token) => {
        state.token = token;
        localStorage.setItem("token", token);
      },
    },
    actions: {
      check: (context) => {
        let user = context.state.user;
        if (user != null) {
          if (user.usertype === "admin") {
            context.state.admin = true;
          }
          context.dispatch("getCart");
        }
      },
      // prods
      getProds: async (context) => {
        let products = await getData('products')
        context.commit("setProds", products)
      },
      getProd: async (context, id) => {
        let prod = await getSingle('products', id)
        context.commit("setProd", prod)
      },

      // add item
      addProd: (context, product) => {
        fetch("https://m-rings.herokuapp.com/products", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            context.dispatch("getProds");
          });
      },

      // update
      updateProd: (context, product) => {
        fetch("https://m-rings.herokuapp.com/products/" + product.id, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      },

      // delete item
      deleteProd: (context, id) => {
        fetch("https://m-rings.herokuapp.com/products/" + id, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            context.dispatch("getProds");
          });
      },
      getUsers: (context) => {
        fetch("https://m-rings.herokuapp.com/users")
          .then((res) => res.json())
          .then((data) => {
            context.commit("setUsers", data.results);
          });
      },
      // login
      login: async (context, payload) => {
        let msg = context.state.msg;
        let data = await getData('users');

        let emailCheck = data.filter((user) =>
          user.email == payload.email
        );

        if (emailCheck.length == 0) {
          msg = "Incorrect email address entered"
          context.commit('setMsg', msg)
          setTimeout(() => {
            context.commit('setMsg', null)
          }, 5000);
        } else {
          let user = emailCheck[0]
          let match = await bcrypt.compare(payload.password, user.password)

          if (match != true) {
            msg = "Incorrect Password Entered"
            context.commit('setMsg', msg)
            setTimeout(() => {
              context.commit('setMsg', null)
            }, 5000);
          } else {
            msg = "Login Successful"
            context.commit('setUser', user)
            context.commit('setMsg', msg)
            setTimeout(() => {
              context.commit('setMsg', null)
            }, 5000);
          }
        }
      },

      // register
      register: async (context, payload) => {
        let msg = context.state.msg;
        let data = await getData('users');
        let match = data.filter((user) =>
          user.email == payload.email
        );

        if (match.length !== 0) {
          msg = "Email Already Exists"
          alert(msg);
        } else {
          payload.password = await bcrypt.hash(payload.password, 10)
          payload.joinDate = new Date(Date.now())
          payload.joinDate = payload.joinDate.toISOString()
          setData('users', payload)
          msg = "Registration Complete"
          alert(msg);
        }

      },

      // cart goetes
      getCart: (context, id) => {
        if (context.state.user != null) {
          id = context.state.user.id;
          fetch(`https://m-rings.herokuapp.com/users/${id}/cart`, {
              method: "GET",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-auth-token": context.state.token,
              },
            })
            .then((res) => res.json())
            .then((data) => {
              if (data != null) {
                context.commit("setCart", JSON.parse(data));
              } else {
                context.commit("setCart", null);
              }
            });
        } else {
          alert("Please Login");
        }
      },

      // addto cart
      addToCart: async (context, item, id) => {
        console.log(item);
        if (context.state.user === null) {
          alert("Please Login");
        } else {
          id = context.state.user.id;
          fetch(`https://m-rings.herokuapp.com/users/${id}/cart`, {
              method: "POST",
              body: JSON.stringify(item),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-auth-token": context.state.token,
              },
            })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data != null) {
                context.state.msg = data.msg;
                setTimeout(() => {
                  context.state.msg = null;
                }, 5000);
                // context.commit("setCart", JSON.parse(data));
                context.dispatch("getCart");
              }
            });
        }
      },

      // all items in cart
      deleteCart: (context, id) => {
        id = context.state.user.id;
        fetch(`https://m-rings.herokuapp.com/users/${id}/cart`, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "x-auth-token": context.state.token,
            },
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            context.dispatch("getCart");
          });
      },

      // one item in cart
      deleteItem: (context, item, id) => {
        id = context.state.user.id;
        fetch(`https://m-rings.herokuapp.com/users/${id}/cart/${item}`, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "x-auth-token": context.state.token,
            },
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            context.dispatch("getCart");
          });
      },
    },
    modules: {},
  });