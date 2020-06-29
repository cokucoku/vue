import Vue from 'vue'
import App from './components/App'
import store from './store/index'
import {LeeAlert,LeeBadge,LeeButton,LeeCollapse,LeeCollapseItem,LeeDialog,LeeInputNumber,LeeImgEffect,LeeLoadImg,LeeLoading,LeeNotification,LeeNotificationItem,LeePagination,LeePasswordInput,LeePay,LeeRadio,LeeRadioGroup,LeeSwitch,LeeSelect,LeeOption,LeeStep,LeeSteps,LeeTimeline,LeeTimelineItem,LeeToolTip,LeeTagCloud}
 from './index.js'
Vue.config.productionTip = false


Vue.use(LeeAlert)
Vue.use(LeeBadge)
Vue.use(LeeButton)
Vue.use(LeeCollapse)
Vue.use(LeeCollapseItem)
Vue.use(LeeDialog)
Vue.use(LeeInputNumber)
Vue.use(LeeImgEffect)
Vue.use(LeeLoadImg)
Vue.use(LeeLoading)
Vue.use(LeeNotification)
Vue.use(LeeNotificationItem)
Vue.use(LeePagination)
Vue.use(LeePasswordInput)
Vue.use(LeePay)
Vue.use(LeeRadio)
Vue.use(LeeRadioGroup)
Vue.use(LeeSwitch)
Vue.use(LeeSelect)
Vue.use(LeeOption)
Vue.use(LeeStep)
Vue.use(LeeSteps)
Vue.use(LeeTimeline)
Vue.use(LeeTimelineItem)
Vue.use(LeeToolTip)
Vue.use(LeeTagCloud)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
