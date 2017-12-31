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
                        <span uk-icon="icon: hashtag"></span>
                    </div>
                    <div class="uk-width-expand@s   overview">
                        <h4> Обо мне</h4>
                        <ul class="uk-list uk-list-large">
                            <li class="uk-margin-small-top">19 лет опыта работы в области IТ, 9 лет на позициях ТОП-менеджмента (в том числе за границей)</li>
                            <li class="uk-margin-small-top">Разработка, внедрение и эксплуатация корпоративных информационных систем - Product Owner (ERP, CRM, PMO, системы внутреннего контроля и риски, управление активами, бюджетирование и казначейство)</li>
                            <li class="uk-margin-small-top">Проектирование центров обработки данных</li>
                            <li class="uk-margin-small-top">Оказание профессиональных услуг для коммерческих организаций и государственных структур</li>
                            <li class="uk-margin-small-top">Организация службы Service Desk</li>
                            <li class="uk-margin-small-top">Формализации IT-стратегии и внедрение политик информационной безопасности</li>
                            <li class="uk-margin-small-top">Подбор кадров и управление профессиональной командой</li>
                            <li class="uk-margin-small-top">Опыт в качестве Лектора по подготовке IT-специалистов для получения сертификата Microsoft - MCSE</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="uk-section uk-padding-small border-top-blue color-black uk-preserve-color">
            <div class="uk-container">
                <div class="uk-grid-small uk-grid" uk-grid>
                    <div class="uk-width-auto@s uk-first-column uk-visible@s ">
                        <span uk-icon="icon: cog"></span>
                    </div>
                    <div class="uk-width-expand@s   overview">
                        <h4> Навыки и технологии</h4>
                    </div>
                </div>
                        <div class="uk-grid-divider uk-grid-small uk-child-width-expand@s skills uk-margin-small-top" uk-grid>
                            <div>Серверные и коммуникационные решения </div>
                            <div>
                            <span class="uk-label labelS label-grey">IBM</span>&nbsp;
                            <span class="uk-label labelS label-grey">HP</span>&nbsp;
                            <span class="uk-label labelS label-grey">Cisco</span>&nbsp;
                            <span class="uk-label labelS label-grey">Avaya</span>&nbsp;
                            <span class="uk-label labelS label-grey">Brocade</span>&nbsp;
                            <span class="uk-label labelS label-grey">NetApp</span>
                            

                            
                                  </div>
                        </div>
                        <div class="uk-grid-divider uk-grid-small uk-child-width-expand@s skills uk-margin-small-top" uk-grid>
                            <div>Проектирование и разработка бизнес приложений на платформах </div>
                            <div>Documentum SharePoint 1C Priority</div>
                        </div>
                        <div class="uk-grid-divider uk-grid-small uk-child-width-expand@s skills uk-margin-small-top" uk-grid>
                            <div>Управление службами MS Server Family </div>
                            <div>AD DNS, GPO DHCP WSUS IIS, ADFS Exchange</div>
                        </div>
                        <div class="uk-grid-divider uk-grid-small uk-child-width-expand@s skills uk-margin-small-top" uk-grid>
                            <div> виртуализация </div>
                            <div><span class="uk-label labelS">Hyper-V </span>&nbsp; <span class="uk-label labelS">VMware</span> </div>
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
.skills {
  font-size: calc(8px + (14 - 8) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1.3;
}
.labelS {
  font-size: calc(6px + (12 - 6) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1.3;
}
.label-grey {
  background: #5c6267;
}
</style>

