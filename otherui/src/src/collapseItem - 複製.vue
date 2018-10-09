<template>
    <div class="lee-collapse-item">
        <div class="lee-collapse-item-title" @click="expand">
            {{title}}<i></i>
        </div>
        <div class="lee-collapse-item-wrap">
            <div class="lee-collapse-item-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            exp: [0,0,0],
            hei: [],
            items:[]
        }

    },
    mounted() {
        var myarr=[];//存item的名称
        const content = document.querySelectorAll(".lee-collapse-item-content");
        const wrap = document.querySelectorAll(".lee-collapse-item-wrap");
        const item = document.querySelectorAll(".lee-collapse-item");
        for (var i = 0; i < content.length; i++) {
            this.items.push(item[i].getAttribute('name'))
            this.hei.push(content[i].offsetHeight)
            wrap[i].style.height = 0
        }

    },
    methods: {
        expand(e) {
            //const item = document.querySelectorAll(".lee-collapse-item");
            var ename=e.target.parentElement.getAttribute('name')//nextElementSibling,nextSibling,parentElement
            var inx=this.items.indexOf(ename)
            //e.target.parentElement.setAttribute('class','exp')
            //e.target.parentElement.classList.add('exp')
            console.log(this.hei[inx])
            e.target.nextElementSibling.style.height = this.hei[inx]+'px'

        }
    },
    props: {
        title: {
            type: String,
            default: '' //默认default
        }
    }
};
</script>
<style scoped>
* {
    box-sizing: border-box;
}

.lee-collapse-item {
    border-bottom: solid 1px #eee;
    background: #fff
}

.lee-collapse-item.exp .lee-collapse-item-title:after {
    border-bottom: solid 1px #eee;
    content: "";
    position: absolute;
    width: 100%;
    left: 15px;
    bottom: 0
}

.lee-collapse-item-title {
    position: relative;
    padding: 10px 15px;
    width: 100%;
    overflow: hidden;
}

.lee-collapse-item-content {
    padding: 10px 15px;
    line-height: 22px;
    font-size: 14px;
    color: #666;

}

.lee-collapse-item-wrap {
    overflow: hidden;
    transition: all .3s ease-in-out;

}
</style>