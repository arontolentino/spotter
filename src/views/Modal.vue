<template>
  <div>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons
          slot="start"
          class="ion-padding-horizontal"
          style="font-size=22px"
          @click="dismissModal()"
        >
          <font-awesome-icon slot="start" icon="times" />
        </ion-buttons>
        <ion-title>Add Excercise</ion-title>
        <ion-buttons slot="primary" class="ion-padding-horizontal">
          <p style="color: #00C853">Create</p>
        </ion-buttons>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Amsterdam</ion-item>
        <ion-item>Bogota</ion-item>
        <ion-item>Buenos Aires</ion-item>
        <ion-item>Cairo</ion-item>
        <ion-item>Dhaka</ion-item>
        <ion-item>Edinburgh</ion-item>
        <ion-item>Geneva</ion-item>
        <ion-item>Genoa</ion-item>
        <ion-item>Glasglow</ion-item>
        <ion-item>Hanoi</ion-item>
        <ion-item>Hong Kong</ion-item>
        <ion-item>Islamabad</ion-item>
        <ion-item>Istanbul</ion-item>
        <ion-item>Jakarta</ion-item>
        <ion-item>Kiel</ion-item>
        <ion-item>Kyoto</ion-item>
        <ion-item>Le Havre</ion-item>
        <ion-item>Lebanon</ion-item>
        <ion-item>Lhasa</ion-item>
        <ion-item>Lima</ion-item>
        <ion-item>London</ion-item>
        <ion-item>Los Angeles</ion-item>
        <ion-item>Madrid</ion-item>
        <ion-item>Manila</ion-item>
        <ion-item>New York</ion-item>
        <ion-item>Olympia</ion-item>
        <ion-item>Oslo</ion-item>
        <ion-item>Panama City</ion-item>
        <ion-item>Peking</ion-item>
        <ion-item>Philadelphia</ion-item>
        <ion-item>San Francisco</ion-item>
        <ion-item>Seoul</ion-item>
        <ion-item>Taipeh</ion-item>
        <ion-item>Tel Aviv</ion-item>
        <ion-item>Tokio</ion-item>
        <ion-item>Uelzen</ion-item>
        <ion-item>Washington</ion-item>
      </ion-list>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: { type: String, default: 'Super Modal' }
  },
  data() {
    return {
      content: ''
    };
  },
  methods: {
    dismissModal() {
      return this.$ionic.modalController.dismiss();
    }
  }
};
</script>

<style scoped></style>
