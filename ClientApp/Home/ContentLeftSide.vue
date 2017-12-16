<template>
    <div>
        <div class="uk-section uk-section-default uk-padding-small">
            <div class="uk-container">
                <img alt="аватар" :src="avatar" class="uk-border-circle uk-align-center uk-responsive-width">
            </div>
            <div class="uk-container uk-text-center">
                <span class="uk-text-primary  uk-text-bold">{{fio}} </span><span class="uk-text-primary">({{age}} лет)</span>
                <hr class="uk-margin-small blue-border"></hr>
                <div class="uk-text-left uk-text-bold">{{position}} </div>
                <div class="uk-text-left"><span class="uk-text-bold">Языки: </span><span class="">{{lang}}</span> </div>
                <div class="uk-text-left"><span uk-icon="icon: location"></span> {{location}} </div>
            </div>
        </div>
        <div class="uk-section uk-section-muted uk-padding-small border-top-blue">
            <div class="uk-container">
                <a href="https://www.linkedin.com/in/mamrukovp/" uk-icon="icon: linkedin" :title="tooltipLinkedin" uk-tooltip></a>
                <a href="https://www.linkedin.com/in/mamrukovp/" uk-icon="icon: mail" :title="tooltipMail" uk-tooltip></a>
                <a href="" uk-icon="icon: cloud-download" class="uk-align-right" :title="tooltipDownload" uk-tooltip></a>
            </div>
        </div>
        <div class="uk-section uk-section-primary uk-padding-small border-top-blue color-black uk-preserve-color">
            <div class="uk-container">
                <div class="uk-grid-small uk-grid" uk-grid>
                    <div class="uk-width-auto@s uk-first-column uk-visible@s ">
                        <span uk-icon="icon: info"></span>
                    </div>
                    <div class="uk-width-expand@s   overview">
                        <p class="uk-text-justify">
                            My competitive advantage is my comprehensive experience in operation, finance and technology, in addition to thriving managerial background: People, Project & Product.
                        </p>
                        <p class="uk-text-justify">
                            I have the talent to understand and persuade C-level Executives and skill to deliver appropriate solution aligned with product R&D/budget constraints.
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div class="uk-section uk-padding-small border-top-blue color-black uk-preserve-color">
            <div class="uk-container">
        <div class="uk-card uk-card-default uk-card-body">
            <h3 class="uk-card-title">Professional summary</h3>
            <ul class="uk-list uk-list-bullet">
            <li>Collaborating and consensus building with C-level Executives</li>
            <li>Managerial and leadership experience for 10 years</li>
            <li>Crisis management and troubleshooting client escalations</li>
            <li>Technological awareness and curiosity, outstanding assimilation skills</li>
            <li>Exceptional communication, presentation and interpersonal skills </li>
            <li>Forming productive business relationships at all levels</li>
            <li>Agile champion</li>
            </ul>
        </div>        
            </div>
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
let tooltipLinkedin = "Профиль в LinkedIn";
let tooltipMail = "Отправить мне сообщение";
let tooltipDownload = "Скачать резюме";
import avatarBig from "../GlobalAssets/Images/avatar.jpg";
export default {
  data: function() {
    return {
      avatar: avatarBig,
      fio: fio,
      age: age,
      position: position,
      lang: lang,
      location: location,
      tooltipLinkedin: tooltipLinkedin,
      tooltipMail: tooltipMail,
      tooltipDownload: tooltipDownload
    };
  }
};
</script>

<style>
.border-top-blue {
  border-top: 1px solid #0283bc;
}

.color-black {
  color: #000000;
}

.overview {
  font-size: calc(9px + (14 - 9) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1.3;
}
</style>
