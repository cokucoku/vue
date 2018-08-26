<template>
  <div id="app">
     <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
          <div class="swiper-slide">Slide 10</div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    <!-- Swiper -->

  </div>
</template>

<script>
import Swiper from 'swiper'
// require styles
import 'swiper/dist/css/swiper.css'

export default {
  name: 'aboutapp',
  mounted(){
     new Swiper ('.swiper-container', {
    autoplay: {
    delay: 2000,
     },
     navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    }
  })
  }
}
</script>

<style>
html, body {
      position: relative;
      height: 100%;
}
.swiper-container,#app {
    width: 100%;
    height: 100%;
}
/*@import url(./assets/swiper.min.css)*/
</style>
