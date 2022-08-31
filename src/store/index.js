import router from "@/router";
import { createStore } from "vuex";

export default createStore({
  state: {
    user: null || JSON.parse(localStorage.getItem("user")),
    prods: null,
    prod: null,
    cart: null,
    token: null || localStorage.getItem("token"),
    admin: false,
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
      state.cart = cart;
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
      context.dispatch("getCart")
      }
    },
    // prods
    getProds: (context) => {
      fetch("http://localhost:7001/products")
        .then((res) => res.json())
        .then((data) => {
          context.commit("setProds", data.results);
        });
    },
    getProd: (context, id) => {
      fetch(`http://localhost:7001/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          context.commit("setProd", data.results[0]);
        });
    },

    // add item
    addProd: (context, product) => {
      fetch("http://localhost:7001/products", {
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
      fetch("http://localhost:7001/products/" + product.id, {
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
      fetch("http://localhost:7001/products/" + id, {
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

    // login
    login: (context, payload) => {
      fetch("http://localhost:7001/users", {
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
            router.push("/all");
          } else {
            alert(data.msg);
          }
        });
    },

    // register
    register: (context, payload) => {
      fetch("http://localhost:7001/users", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("login", payload);
          router.push("/all");
        });
    },

    // cart goetes
    getCart: (context, id) => {
      if (context.state.user === null) {
        alert("Please Login");
      } else {
        id = context.state.user.id;
        fetch(`http://localhost:7001/users/${id}/cart`, {
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
            }
          });
      }
    },

    // addto cart
    addToCart : async (context, item, id) => {
      console.log(item);
      if (context.state.user === null) {
        alert("Please Login");
      } else {
        id = context.state.user.id;
        fetch(`http://localhost:7001/users/${id}/cart`, {
          method: "POST",
          body : JSON.stringify(item),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // if (data != null) {
            //   context.commit("setCart", JSON.parse(data));
            // }
          });
      }
    },

    // all items in cart
    deleteCart : (context, id) => {
      fetch(`http://localhost:7001/users/${id}/cart`,{
        method : "DELETE",
        headers : {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token, 
        }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
    },
    
    // one item in cart
    deleteCart : (context, item,id) => {
      fetch(`http://localhost:7001/users/${id}/cart`,{
        method : "DELETE",
        body : JSON.stringify(item),
        headers : {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token, 
        }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
    },
  },
  modules: {},
});
