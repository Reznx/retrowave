<template>
  <div>
    <div id="background">
      <div id="image"></div>
      <div id="glow"></div>
    </div>

    <canvas id="waves"></canvas>

    <div id="controls">
      <input id="volume" name="volume" type="range" min="0" max="100" value="15" step="1" />
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
    image:
      "http://1.bp.blogspot.com/-8PfnHfgrH4I/TylX2v8pTMI/AAAAAAAAJJ4/TICBoSEI57o/s1600/search_by_image_image.png"
  }),
  computed: {
    randomBackground() {
      return `url(${this.gifs[Math.floor(Math.random() * this.gifs.length)]})`;
    }
  }
};
</script>


<style scoped lang="scss">
#background {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform .5s ease;
    
    &.active {
        transform: scale(1.1);
       
        #glow {
            filter: blur(15px) saturate(250%);
            opacity: 0.75;
        }
    }
}

#image {
    @extend #background;
    background-size: cover;
    background-position: center;
}

#glow {
    @extend #image;
    opacity: 0;
    transition: opacity .25s ease;
}

#waves {
    display: block;
    position: absolute;
}

#start-btn {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    font-size: 64px;
    font-weight: 700;
    cursor: pointer;
}

#controls {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 15px;
}
#controls #volume {
    opacity: 0.25;
    
    &:hover {
        opacity: 0.75;
    }
}
</style>
