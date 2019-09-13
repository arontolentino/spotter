<template>
  <ion-content>
    <div class="back">
      <ion-buttons slot="start" @click="$router.go(-1)">
        <font-awesome-icon icon="arrow-left" />
      </ion-buttons>
    </div>

    <ion-grid>
      <ion-row justify-content-center>
        <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">
          <div class="app-title" text-center>
            <h1>SPOTTER</h1>
          </div>

          <div class="form" padding>
            <div class="form-title" text-center>
              <h4>Create Account</h4>
            </div>

            <div class="form-content"></div>
            <ion-item lines="none">
              <ion-input
                type="email"
                placeholder="Email"
                @ionInput="email = $event.target.value"
              ></ion-input>
            </ion-item>

            <ion-item lines="none">
              <ion-input
                type="password"
                placeholder="Password"
                @ionInput="password = $event.target.value"
              ></ion-input>
            </ion-item>

            <ion-button
              class="form-button"
              size="medium"
              expand="block"
              @click="signUp"
              >Register</ion-button
            >
          </div>

          <div class="form-footer ion-padding" text-center>
            <p>
              By creating an account, you agree to the Spotter
              <span>
                <router-link to="/" style="color: #00C853"
                  >Terms of Service</router-link
                >
              </span>
              and
              <span>
                <router-link to="/" style="color: #00C853"
                  >Privacy Policy.</router-link
                >
              </span>
            </p>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    signUp() {
      console.log(this.email);
      console.log(this.password);
      this.$store.dispatch('signUp', {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
.back {
  padding-top: env(safe-area-inset-top);
  margin-top: 20px;
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 24px;
  font-size: 1.3em;
}

p {
  margin: 0;
}

ion-grid {
  width: 100%;
  height: 100%;
  background: #222;
}

ion-row {
  height: 100%;
}

ion-col {
  border: none;
  background: #222;
  color: #fff;
}

ion-item {
  border-radius: 5px;
  border: 1px solid grey;
  margin-bottom: 25px;
}

ion-input {
  height: 56px;
}

ion-button {
  font-weight: 500;
  margin-left: 0px;
  margin-right: 0px;
  --background: #10dc60;
  --background-activated: #0ec254;
  --color: #222;
  --color-activated: #222;
  --border-radius: 5px;
}

.app-title {
  margin-bottom: 10px;
}

.app-title h1 {
  font-size: 3em;
  margin-top: 0;
  font-weight: bold;
  font-style: italic;
}

.form-title {
  margin-bottom: 20px;
}
</style>
