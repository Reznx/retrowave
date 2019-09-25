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
    </div>
    <div class="button">
      <router-link to="/about" class="link">DO MORE</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
