<template>
    <div class="uk-section uk-section-default uk-padding-small">
        <div id="sticky-content" class="uk-container">
            <div class="uk-grid-small uk-grid-divider uk-grid" uk-grid>
                <div class="uk-width-1-3@m uk-first-column ">
                <app-leftSide class="uk-box-shadow-small" />
                </div>
                <div class="uk-width-2-3@m">
                <app-rightSide />
                </div>
            </div>

        </div>
    </div>

</template>

<script>
"use strict";
import AppLeftSide from "../Home/ContentLeftSide.vue";
import AppRightSide from "../Home/ContentRightSide.vue";
export default {
  components: {
    "app-leftSide": AppLeftSide,
    "app-rightSide": AppRightSide
  }
};
</script>

<style>

</style>
