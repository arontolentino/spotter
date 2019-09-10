import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";

const fb = require("@/firebase/index.js");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    isAuthenticated: false
  },

  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    }
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    }
  },

  actions: {
    signUp({ commit, state }, { username, email, password }) {
      fb.auth
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          console.log("User registered!");

          // fb.usersCollection
          //   .doc(state.user.user.uid)
          //   .set({
          //     username,
          //     email
          //   })
          //   .then(() => {
          //     console.log("Additional user details added!");
          //   });

          router.push("/login");
        })
        .catch(error => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          console.log(error);
        });
    },

    logIn({ commit }, { email, password }) {
      fb.auth
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user);
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/entries");
        })
        .catch(error => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          console.log(error);
        });
    },

    signOut({ commit }) {
      fb.auth
        .signOut()
        .then(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/login");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/login");
        });
    },

    addEntry({ state }, { date, name, count }) {
      console.log(state.user);
      fb.workoutsCollection
        .add({
          date,
          name,
          count,
          uid: state.user.user.uid
        })
        .then(() => {
          console.log("Success!");
        });
    }
  }
});
