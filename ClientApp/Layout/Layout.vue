<template>
<div>
       <app-header class="uk-box-shadow-medium"></app-header>
       <app-content></app-content>
        <app-footer></app-footer>
</div>       
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppContent from "./AppContent.vue";
import AppFooter from "./AppFooter.vue";
import Vue from "vue";
import VueAnalytics from "vue-analytics";
Vue.use(VueAnalytics, {
  id: "UA-56335862-2",
  autoTracking: {
    exception: true
  }
});
export default {
  components: {
    "app-header": AppHeader,
    "app-content": AppContent,
    "app-footer": AppFooter
  }
};
</script>

<style>

</style>
