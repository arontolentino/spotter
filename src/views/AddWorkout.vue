<template>
  <div>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons
          slot="secondary"
          class="ion-padding-horizontal"
          style="font-size=22px"
          @click="$router.go(-1)"
        >
          <font-awesome-icon icon="arrow-left" />
        </ion-buttons>
        <ion-title>New Workout</ion-title>
        <ion-buttons slot="primary" class="ion-padding-horizontal">
          <p style="color: #00C853">Create</p>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <ion-card-subtitle>Date</ion-card-subtitle>
            <ion-datetime displayFormat="MM DD YY" placeholder="Select Date"></ion-datetime>
          </ion-card-title>
        </ion-card-header>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <ion-card-subtitle>Workout Name</ion-card-subtitle>
            <ion-input placeholder="Enter name"></ion-input>
          </ion-card-title>
        </ion-card-header>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Excercises</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-list lines="none">
            <ion-item>
              <ion-label>Flat Bench Press</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Incline Bench Press</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Weighted Dips</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Cable Fly</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Tricep Extensions</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Tricep Pulldowns</ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
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
ion-datetime {
  padding-left: 0;
}

ion-card-content {
  padding-top: 0;
}
</style>