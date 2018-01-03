import Vue from 'vue';
//import VueAnalytics from 'vue-analytics'
import AppLayout from './Layout/Layout.vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
// VueAnalytics, {
//     id: 'UA-56335862-2',
//     autoTracking: {
//         exception: true
//       }
//   },
const app = new Vue({
render: h=> h(AppLayout),
mounted() {
    UIkit.update();
}
});
export {app};


