import router from "@/router";
import { createStore } from "vuex";
let live = "https://m-rings.herokuapp.com/";

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
      // if (user && singlepost != null) {
      //   if(user.id === singlepost.id) {
      //     me = true
      //   }
      //   context.dispatch("getCart");

      // }
    },
    // prods
    getProds: (context) => {
      fetch("https://m-rings.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => {
          context.commit("setProds", data.results);
        });
    },
    getProd: (context, id) => {
      fetch(`https://m-rings.herokuapp.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          context.commit("setProd", data.results[0]);
        });
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
    login: (context, payload) => {
      fetch("https://m-rings.herokuapp.com/users", {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.msg === "Login Successful") {
            context.commit("setUser", data.results);
            context.commit("setToken", data.token);
            context.dispatch('check')
            router.push("/all");

          } else {
            alert(data.msg);
          }
        });
    },

    // register
    register: (context, payload) => {
      fetch("https://m-rings.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          context.dispatch("login", payload);
          router.push("/all");
        });
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
