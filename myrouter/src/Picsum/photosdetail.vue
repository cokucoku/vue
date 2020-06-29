<template>
    <div class="detail">
    	<a :href="photoinfo.url">拍摄者：{{photoinfo.author}}</a>
    	<img :src="photoinfo.download_url">
    </div>
</template>
<script>
import $ from 'jquery'
export default {
	data() {
        return {
            photoinfo:{}
        }
    },
	mounted(){
		var id=this.$route.params.id
    	var _this=this
    	$.ajax({
    		url: 'https://picsum.photos/id/'+id+'/info',
    		type: 'get',
    		dataType: 'json'
    	})
    	.done(function(rs) {
    		_this.photoinfo=rs
    	})
    }
}
</script>
<style scoped>
.detail{width: 100%;height: 100%;position: fixed;left: 0;top: 0}
.detail img{width: 100%;height: 100%;object-fit: cover;}
.detail a{position: absolute;left: 50px;bottom: 32px;color: #fff;text-decoration: underline;font-size: 14px}


</style>