<template>
<div>
       <app-header></app-header>
       <app-content></app-content>
</div>       
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppContent from "./AppContent.vue";
import Vue from 'vue';
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
    id: 'UA-56335862-2',
    autoTracking: {
        exception: true
      }
});
export default {
  components: {
    "app-header": AppHeader,
    "app-content": AppContent
  }
};
</script>

<style>

</style>
