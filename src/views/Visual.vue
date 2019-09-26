<template>
  <div>
    <div class="background">
      <div class="image" :style="{backgroundImage: randomBackground}"></div>
      <div class="glow" :style="{backgroundImage: randomBackground}"></div>
    </div>

    <canvas class="waves"></canvas>

    <div class="controls">
      <input class="volume" v-model="volume" type="range" min="0" max="100" step="1" />
      <span>{{volume}}</span>
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({
    gifs: [
      "https://i.giphy.com/media/l3UcrZHrGW2CjHXqM/giphy.webp",
      "https://i.giphy.com/media/D4zbzXKSl9tOE/giphy.webp",
      "https://i.giphy.com/media/xT9IglBTX4JAsRHH9K/giphy.webp",
      "https://i.giphy.com/media/qOnd3CqaqSoa4/giphy.webp",
      "https://i.giphy.com/media/3oriNLWh9ZXbuppKkE/giphy.webp"
    ],
    audio: undefined,
    volume: 5,
    playing: false
  }),
  computed: {
    randomBackground() {
      return `url(${this.gifs[Math.floor(Math.random() * this.gifs.length)]})`;
    }
  },
  mounted() {
    this.audio = new Audio("http://145.239.26.146:7750/;stream/1");
    this.audio.volume = this.volume / 100;
    this.audio.play();
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
