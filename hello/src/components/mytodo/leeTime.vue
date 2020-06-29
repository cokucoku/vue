<template>
	<div class="lee-time">
		{{times}}
	</div>
</template>
<script>
export default {
	data() {
        return {
            times: ''
        }
    },
    mounted(){
    	setInterval(()=>{
    		var year=new Date().getFullYear()>=10?new Date().getFullYear():'0'+new Date().getFullYear()
    		var month=new Date().getMonth()>=9?new Date().getMonth()+1:'0'+(new Date().getMonth()+1)
    		var day=new Date().getDate()>=10?new Date().getDate():'0'+new Date().getDate()
    		var hour=new Date().getHours()>=10?new Date().getHours():'0'+new Date().getHours()
    		var min=new Date().getMinutes()>=10?new Date().getMinutes():'0'+new Date().getMinutes()
    		var sec=new Date().getSeconds()>=10?new Date().getSeconds():'0'+new Date().getSeconds()
    		this.times=year+'年'+month+'月'+day+'日'+hour+'时'+min+'分'+sec+'秒'
    	},1000)

    }
}
</script>