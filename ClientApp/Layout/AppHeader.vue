<template>
    <!-- <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #sticky-content" class="uk-sticky" style=""> -->
    <div v-on:active="toggle(true)" v-on:inactive="toggle(false)" uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-dark; top: 250">      
      <nav class="uk-navbar-container">
        <div class="uk-container">
          <div uk-navbar="" class="uk-navbar">
            <div class="uk-navbar-left">
                <a class="uk-navbar-item uk-logo" href="#">
                  <span v-if="!isHidden"><span uk-icon="icon: home"></span></span>
                  <img  v-if="isHidden" :src="avatar" alt="аватар" class="uk-border-circle" ></a>
                <ul class="uk-navbar-nav">
                  <li class="uk-active"><a href="">Опыт</a></li>
                  <li><a href="">Проекты</a></li>
                  <li><a href=""></a></li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>        
</template>

<script>
"use strict";
//import UIkit from 'uikit';
import avatarSmall from "../GlobalAssets/Images/avatarSmall.png";
//var fio = "Мамруков Петр";
var isHidden = true;
export default {
  data: function() {
    return {
      avatar: avatarSmall,
      //fio,
      isHidden
    };
  },
  methods: {
    toggle() {
      this.isHidden = !this.isHidden;
    }
  },
  mounted() {
    // UIkit.util.on('#navsticky', 'active', function () {
    // });
    //     UIkit.util.on('#navsticky', 'inactive', function () {
    // });
  }
};
</script>

<style>

</style>
