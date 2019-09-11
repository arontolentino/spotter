<template>
  <div>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons
          slot="secondary"
          class="ion-padding-horizontal"
          style="font-size=18px"
          @click="dismissModal()"
        >
          <font-awesome-icon icon="times" />
        </ion-buttons>
        <ion-title>New Workout</ion-title>
        <ion-buttons slot="primary" class="ion-padding-horizontal">
          <p style="color: #00C853">Create</p>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">{{ content }}</ion-content>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: { type: String, default: "Super Modal" }
  },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    dismissModal() {
      return this.$ionic.modalController.dismiss();
    }
  }
};
</script>

<style scoped>
</style>