<template>
  <div>
    <div class="background">
      <div class="image" :style="{backgroundImage: randomBackground}"></div>
      <div class="glow"></div>
    </div>

    <canvas class="waves"></canvas>

    <div class="controls">
      <input class="volume" v-model="volume" type="range" min="0" max="100" step="1" />
      <button @click="test">TEST</button>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    activeClass: false,
    volume: 5
  }),

  computed: {
    ...mapState(["gifs", "audio"]),
    randomBackground() {
      return `url(${this.backgound[Math.floor(Math.random() * this.backgound.length)].images.original.url})`;
    },
    backgound() {
      return this.$store.getters.background.data;
    }
  },

  methods: {
    test() {
      console.log(this.backgound);
    }
  },

  async mounted() {
    this.background = await this.$store.dispatch("fetchBackground");
    // this.$store.dispatch("startAudio");
  },

  watch: {
    volume() {
      this.audio.volume = this.volume / 100;
    }
  }
};
</script>


<style scoped lang="scss">
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;

  &.active {
    transform: scale(1.1);

    .glow {
      filter: blur(15px) saturate(250%);
      opacity: 0.75;
    }
  }
}

.image {
  @extend .background;
  background-size: cover;
  background-position: center;
}

.glow {
  @extend .image;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.waves {
  display: block;
  position: absolute;
}

.controls {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 15px;
}
.controls .volume {
  opacity: 0.25;

  &:hover {
    opacity: 0.75;
  }
}
</style>
