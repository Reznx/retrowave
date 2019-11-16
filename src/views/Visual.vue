<template>
  <div>
    <div class="background">
      <div class="image" :style="{backgroundImage: randomBackground}"></div>
      <div class="glow"></div>
    </div>

    <canvas class="waves"></canvas>

    <div class="controls">
      <input class="volume" v-model="volume" type="range" min="0" max="100" step="1" />
      <button type="button">TEST</button>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    volume: 0.1,
    audio: null
  }),

  computed: {
    ...mapState(["gifs", "songName"]),
    randomBackground() {
      return `url(${this.gifs[Math.floor(Math.random() * this.gifs.length)]})`;
    }
  },

  async created() {
    await this.$store.dispatch("FETCH_SONG");
    console.log(this.songName);
  },

  mounted() {
    this.audio = new Audio("http://145.239.26.146:7750/;stream/1");
    this.audio.play();
    this.audio.volume = this.volume;
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
