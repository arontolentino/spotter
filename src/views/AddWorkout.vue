<template>
  <div>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons
          slot="start"
          class="ion-padding-horizontal"
          style="font-size=22px"
          @click="$router.go(-1)"
        >
          <font-awesome-icon slot="start" icon="arrow-left" />
        </ion-buttons>
        <ion-title>New Workout</ion-title>
        <ion-buttons slot="end" class="ion-padding-horizontal">
          <p style="color: #00C853">Create</p>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <ion-card-subtitle>Date</ion-card-subtitle>
            <ion-datetime
              displayFormat="DDDD MMM D, YYYY"
              placeholder="Select Date"
            ></ion-datetime>
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
          <ion-button @click="openModal">Add Excercise</ion-button>
          <!-- <ion-list lines="none">
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
          </ion-list>-->
        </ion-card-content>
      </ion-card>
    </ion-content>
  </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
  name: 'AddWorkout',
  props: {
    title: { type: String, default: 'Super Modal' }
  },
  data() {
    return {
      content: ''
    };
  },
  methods: {
    openModal() {
      return this.$ionic.modalController
        .create({
          component: Modal,
          componentProps: {
            data: {
              content: 'New Content'
            },
            propsData: {
              title: 'New title'
            }
          }
        })
        .then(m => m.present());
    },
    dismissModal() {
      return this.$ionic.modalController.dismiss();
    }
  }
};
</script>

<style scoped>
ion-datetime {
  padding-left: 0;
  --placeholder-color: #808080;
}

ion-card-content {
  padding-top: 0;
}
</style>
