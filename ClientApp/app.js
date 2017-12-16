import Vue from 'vue';
import AppLayout from './Layout/Layout.vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

const app = new Vue({
render: h=> h(AppLayout),
mounted() {
    UIkit.update();
}
});
export {app};


