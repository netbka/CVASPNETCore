<template>
<div>
    <slot name="title"></slot>
   
                    <hr class="uk-margin-remove blue-border" />
                    <div class="font-8-line-13 uk-margin-small-top" uk-grid>
                        <slot name="description"></slot>
                    </div>
     </div>   
</template>

<script>
"use strict";

export default {
  data: function() {
    return {

    };
  },


};
</script>

<style>

</style>
