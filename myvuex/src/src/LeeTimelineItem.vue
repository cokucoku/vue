<template>
    <li v-show="result" :key="xh">
        <div class="timeline"></div>
        <div class="timedot" :class="{large:size,animate:timeline.animate}" :style="{background:color}"></div>
        <div class="contentw">
            <div class="themeone" v-if="timeline.theme==1">
                <div class="contents">
                    <slot></slot>
                </div>
                <div class="timestamp">{{timestamp}}</div>
            </div>
            <div class="themetwo" v-if="timeline.theme==2">
                <div class="timestamp">{{timestamp}}</div>
                <div class="contents" :style="{background:color,color:'#fff'}" v-if="color">
                    <slot></slot>
                </div>
                <div class="contents" v-else>
                    <slot></slot>
                </div>
            </div>
            <div class="themethree" v-if="timeline.theme==3">
                <div class="timestamp" :style="{background:color,color:'#fff'}" v-if="color">
                    <div>{{timestamp | today}}<span>{{timestamp | toyear}}</span></div>
                </div>
                <div class="timestamp" :style="{background:'#aaa',color:'#fff'}" v-else>
                    <div>{{timestamp | today}}<span>{{timestamp | toyear}}</span></div>
                </div>
                <div class="contents">
                    <slot></slot>
                </div>
            </div>
            <div class="themefour" v-if="timeline.theme==4">
                <div class="timestamp">
                    <div :style="{background:color,color:'#fff'}" v-if="color">{{timestamp}}</div>
                    <div :style="{background:'#aaa',color:'#fff'}" v-else>{{timestamp}}</div>
                </div>
                <div class="contents">
                    <slot></slot>
                </div>
            </div>
            <div class="themefive" v-if="timeline.theme==5">
                <div class="timestamp">{{timestamp}}</div>
                <div class="contents" :style="{color:color}">
                    <slot></slot>
                </div>
            </div>
        </div>
    </li>
</template>
<script>
export default {
    name: 'LeeTimelineItem',
    data() {
        return {

        };
    },
    inject: ['timeline'],
    props: {
        timestamp: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        },
        xh: {
            type: Number,
            default: 0
        }

    },
    computed: {
        result() {
            if (this.timeline.reverse) {
                return this.xh >= this.timeline.totalnum-this.timeline.limitnum|| this.timeline.limitnum == 0

            } else {
                return this.xh < this.timeline.limitnum || this.timeline.limitnum == 0

            }
        }

    },
    filters: {
        today: function(value) {
            value = value.slice(5)
            return value
        },
        toyear: function(value) {
            value = value.slice(0, 4)
            return value
        }
    }
};
</script>
<style scoped>

.lee-timeline li {
    padding-bottom: 10px;
    position: relative;
}

.lee-timeline li .timeline {
    position: absolute;
    left: 5px;
    height: 100%;
    border-left: solid 2px #eee;
    top: 0
}

.lee-timeline li .timedot {
    position: absolute;
    left: 0;
    height: 12px;
    width: 12px;
    background: #eee;
    top: 0;
    border-radius: 50%;

}

.lee-timeline li .timedot.animate {
    animation: my-in 1s infinite ease-in-out;
}

.lee-timeline li:nth-child(2n+1) .timedot.animate {
    animation-delay: .5s;
}

@keyframes my-in {
    0% {
        transform: scale(.6);
    }

    50% {
        transform: scale(1);
    }

    100% {
        transform: scale(.6);
    }
}

/*.lee-timeline li .timedot:hover{transform: scale(1.5);}*/
.lee-timeline li .timedot.large {
    width: 16px;
    height: 16px;
    left: -2px
}

.lee-timeline li .contentw {
    left: 28px;
    top: -3px;
    position: relative;
    width: calc(100% - 28px)
}

.lee-timeline li .contentw .contents {
    font-size: 14px;
}

.lee-timeline li .contentw .timestamp {
    font-size: 13px;
    color: #999
}


.lee-timeline .contentw .themetwo .timestamp {
    padding-bottom: 15px;
}

.lee-timeline .contentw .themetwo .contents {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .1);
    padding: 20px;
}

.lee-timeline .contentw .themethree {
    display: flex
}

.lee-timeline .contentw .themethree .timestamp {
    margin-right: 5px;
    padding: 0 20px;
    width: 80px;
    font-size: 28px;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    line-height: 26px;
    flex-shrink: 0
}

.lee-timeline .contentw .themethree .contents {
    flex-grow: 1;
    background: #eee;
    padding: 10px;
}

.lee-timeline .contentw .themethree .timestamp span {
    font-size: 14px;
    display: block
}

.lee-timeline .contentw .themethree .timestamp div {
    text-align: center
}

.lee-timeline .contentw .themefour {
    display: flex
}

.lee-timeline .contentw .themefour .timestamp {
    flex-shrink: 0;
    margin-right: 5px
}

.lee-timeline .contentw .themefour .timestamp div {
    padding: 0 5px;
}

.lee-timeline .contentw .themefour .contents {
    flex-grow: 1;
}

.lee-timeline .contentw .themefive {
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
    margin-bottom: 20px;
    padding: 20px;
    position: relative;
    background: #fafafa
}

.lee-timeline .contentw .themefive:before {
    content: "";
    border-width: 4px;
    position: absolute;
    top: 8px;
    border-color: #fafafa #fafafa transparent transparent;
    border-style: solid;
    left: -4px;
    transform: translateX(-50%);
    box-shadow: 1px -1px 1px rgba(0, 0, 0, .15);
    transform: rotate(-135deg);
}
</style>