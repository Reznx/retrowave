<template>
  <div class="wrapper">
    <div class="home">
      <div class="centerer">
        <img class="porthole" src="https://media.giphy.com/media/d7TrGheIYhYy4UJwhd/giphy.gif" />
      </div>

      <div class="centerer">
        <p class="text one">Do what you love</p>
      </div>
      <div class="centerer">
        <p class="text two">Do what you love</p>
      </div>
      <div class="headphones">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <path
            d="M16 8A6 6 0 1 0 4 8v11H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2V8a8 8 0 1 1 16 0v3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2V8zm-4 2h3v10h-3V10zm-7 0h3v10H5V10z"
            fill="white"
          />
        </svg>
        <p class="headphones__text">Headphones is recommended</p>
      </div>
    </div>
    <div class="button">
      <router-link to="/visual" tag="a" class="link" @click="submitHandler">DO MORE</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data: () => ({
    background: null
  }),
  methods: {
    async submitHandler() {
      this.background = await this.$store.dispatch("fetchBackground");
    }
  }
};
</script>
