<template>
    <div class="list">
    	<ul>
    		  <router-link :to="'/photo/'+item.id" tag="li" v-for="item in photos" :key="item.id"><img :src="item.download_url"></router-link>
    	</ul>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
	 data() {
        return {
            photos:[]
        }
    },
    mounted(){
    	var _this=this
    	$.ajax({
    		url: 'https://picsum.photos/v2/list?limit=12',
    		type: 'get',
    		dataType: 'json',
    		data: {limit: '10'},
    	})
    	.done(function(rs) {
    		_this.photos=rs
    	})
    }

}
</script>
<style scoped>
.list ul {display: flex;flex-wrap: wrap;width: 100%}
.list li{width: 25%;height: 33.33vh;position: relative;}
.list li img{object-fit: cover;width: 100%;height: 100%;position: absolute;}

</style>