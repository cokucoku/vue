<template>
	<div id="demo">
    <div class="innum">
    	<span @click="decrement">-</span>
    	<span>{{count}}</span>
    	<span @click="increment">+</span>
    </div>
    <div id="todos">
    	<ul>
    		<li v-for="item in todos" :class="[item.have?'green':'red']">{{item.title}}</li>
    	</ul>
    	<p>总：{{totaldotos}},已完成{{havedo}},未完成{{nohavedo}}</p>
    </div>
    <div class="leevueplugin">
        <!-- 测试插件地方 -->
        <lee-select v-model="value" filterable placeholder="请选择">
    <lee-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value">
    </lee-option>
</lee-select>
    </div>
</div>
</template>
<script>
export default {
    name: 'app',
    data() {
              return {
                options: [{
                  value: '选项1',
                  label: 'Html'
                }, {
                  value: '选项2',
                  label: 'Css3'
                }, {
                  value: '选项3',
                  label: 'Javascript'
                }, {
                  value: '选项4',
                  label: 'Vue'
                }, {
                  value: '选项5',
                  label: 'React'
                }],
                value: ''
              }
          },
    mounted() {
    	

    },
    computed: {
    	count(){
    		return this.$store.state.count
    	},
    	todos(){
    		return this.$store.state.todos
    	},
    	totaldotos(){
    		return this.$store.getters.totaldotos
    	},
    	havedo(){
    		return this.$store.getters.havedo
    	},
    	nohavedo(){
    		return this.$store.getters.nohavedo
    	}

    },
    methods:{
    	decrement(){
    		this.$store.commit('decrement', 1)

    	},
    	increment(){
    		this.$store.commit('increment', 1)
    	}
    }

}
</script>
<style scoped>
     .red{color: #f00}
     .green{color: green}
	.innum{display: flex;}
	.innum span{border:solid 1px #ddd;padding:0 8px;margin-left: -1px}
	.innum span:nth-child(3),.innum span:nth-child(1){background: #EEE;cursor: pointer;}
</style>