<template>
    <div class="uk-section uk-section-default uk-padding-remove-top">
        <div class="uk-container">
            <img alt="аватар" :src="avatar" class="uk-border-circle uk-align-center">
        </div>
        <div class="uk-container uk-text-center">
            <span class="uk-text-primary  uk-text-bold">{{fio}} </span><span class="uk-text-primary">({{age}} лет)</span>
            <hr class="uk-margin-small blue-border"></hr>
            <div class="uk-text-left uk-text-bold">{{position}} </div>
            <div class="uk-text-left"><span class="uk-text-bold">Языки: </span><span class="">{{lang}}</span> </div>
            <div class="uk-text-left"><span uk-icon="icon: location"></span> {{location}} </div>
        </div>
        
        
    </div>

</template>

<script>
"use strict";
import Moment from "moment";
let fio = "Мамруков Петр";
var birthDate = Moment([1980, 7, 26]);
var now = Moment();
let age = now.diff(birthDate, "years");
let position = "ИТ Директор / CTO(CIO)";
let lang = "Русский, Английский, Иврит";
let location = "Россия (Москва)";
import avatarBig from "../GlobalAssets/Images/avatar.jpg";
export default {
  data: function() {
    return {
      avatar: avatarBig,
      fio: fio,
      age: age,
      position: position,
      lang: lang,
      location: location
    };
  }
};
</script>

<style>

</style>

