import Vue from "vue";
import { IonicVueRouter } from "@ionic/vue";
import NavLayout from "./layouts/NavLayout.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Entries from "./views/Entries.vue";

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/nav",
      name: "nav",
      component: NavLayout,
      children: [
        {
          path: "/entries",
          name: "entries",
          component: Entries
        }
      ]
    }
  ]
});
