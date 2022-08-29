import router from "@/router";
import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    prods: null,
    prod: null,
  },
  getters: {},
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setProds: (state, prods) => {
      state.prods = prods;
    },
    setProd: (state, prod) => {
      state.prod = prod;
    },
  },
  actions: {
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
    addProd : (context, product) => {
      fetch("http://localhost:7001/products", {
        method : "POST",
        body : JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        context.dispatch("getProds")
      })
    },

    // delete item
    deleteProd: (context, id) => {
      fetch("http://localhost:7001/products/" + id, {
        method : "DELETE",
        headers : {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        context.dispatch("getProds") 
      });
    },

    // login
    login: (context, payload) => {
      fetch("http://localhost:7001/users", {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.commit("setUser", data.results);
          router.push("/all");
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
  },
  modules: {},
});
