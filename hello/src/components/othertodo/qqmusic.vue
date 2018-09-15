<template>
    <div class="musiclist">
        <transition-group name="list" tag="ul">
            <li v-for="(item,inx) in music" v-bind:key="item.xqusic_id">{{item.xsinger_name}}</li>
        </transition-group>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data() {
        return {
            music: ''
        }
    },
    beforeCreate() {
        var _self = this;
        $.ajax({
            url: '/api/qqmusic/34832462',
            dataType: 'json',
            success: function(ds) {
                _self.music = ds.data.playlist
            }
        })
    }
}
</script>
<style scoped>
.musiclist {
    transition: all 1s
}

.musiclist li {
    border-bottom: solid 1px #eee;
    line-height: 34px;
    list-style: circle;
    transition: all 1s
}
</style>