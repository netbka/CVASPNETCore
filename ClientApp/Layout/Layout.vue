<template>
<div>
       <app-header></app-header>
       <app-content></app-content>
</div>       
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppContent from "./AppContent.vue";
export default {
  components: {
    "app-header": AppHeader,
    "app-content": AppContent
  }
};
</script>

<style>

</style>
