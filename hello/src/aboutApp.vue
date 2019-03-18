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
export default {
    name: 'aboutapp',
    mounted() {
        var postdata = {
            area: 'pudong'
        }
        var postdata1 = {
            count: 2
        }
        this.leeapi('/201306/ajax.php', 'post', postdata).then((response) => {
            console.log(response.data)
        })
        this.leeapi('/top250', 'post', postdata1).then((response) => {
            console.log(response.data)
        })
        this.leeapi('/api/qqmusic/34832462', 'get').then((response) => {
            console.log(response.data.data)
        })
        this.leeapi('/api/beian/www.leeao82.com', 'get').then((response) => {
            console.log(response.data)
        })
        this.leeapi('/toutiao/index', 'get',{type:'top',key:'0e6a8735724704143e51390eb86394c3'}).then((response) => {
            console.log(response.data.result.data)
        })
        new Swiper('.swiper-container', {
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
html,
body {
    position: relative;
    height: 100%;
}

.swiper-container,
#app {
    width: 100%;
    height: 100%;
}

@import url(./assets/swiper.min.css)
</style>