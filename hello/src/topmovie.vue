<template>
    <div id="topmovie">
        <ul>
            <li v-for="item in movie">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data() {
        return {
           movie:''
        }
    },
    beforeCreate() {
        var _self = this;
        $.ajax({
            url: '/api',
            dataType: 'json',
            success: function(ds) {
                _self.movie=ds.subjects
            }

        })
    }
}
</script>
<style>
</style>