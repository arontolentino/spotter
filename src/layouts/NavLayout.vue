<template>
  <div id="app">
    <ion-menu side="start" menuId="first">
      <ion-header>
        <ion-toolbar color="dark">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <div class="ion-page" main>
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-menu-button @click="openStart"></ion-menu-button>
          </ion-buttons>
          <ion-title>Entries</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-vue-router />
      </ion-content>
    </div>
    <ion-menu-controller></ion-menu-controller>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      items: [{ id: 0, name: "Ahmed" }, { id: 1, name: "Naima" }]
    };
  },
  methods: {
    openStart() {
      document.querySelector("ion-menu-controller").open("start");
    },
    openEnd() {
      document.querySelector("ion-menu-controller").open("end");
    }
  }
};
</script>

<style>
ion-toolbar {
  --min-height: 56px;
}
</style>