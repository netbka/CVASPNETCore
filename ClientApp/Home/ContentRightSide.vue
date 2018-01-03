<template>
    <div class="uk-section uk-padding-small color-black uk-preserve-color">
            <div class="uk-container">
                <div class="uk-grid-small uk-grid" uk-grid>
                    <div class="uk-width-auto@s uk-first-column uk-visible@s">
                        <span uk-icon="icon: world"></span>
                    </div>
                    <div class="uk-width-expand@s   overview">
                        <h3>Опыт работы</h3>
                    </div>
                </div>
                <div class="uk-grid-divider uk-grid-small skills uk-margin-small-top" uk-grid>
                    <div class="uk-width-auto@s uk-first-column uk-visible@s">{{d1}} по н.в. </div>
                    <div class="uk-width-expand@s">
                       <h4 class="uk-margin-remove">РСМ РУСЬ (АКФ Топ-Аудит) <span uk-icon="icon: location"> </span>Москва</h4>
                       <h5 class="uk-margin-remove ">Заместитель генерального директора по ИТ / CTO</h5>
                       <hr class="uk-margin-small blue-border" />
                       <div class="skills uk-margin-small-top" uk-grid>
                           <div><ul class="uk-list uk-list-bullet">
                           <li>Оперативное управление ИТ-департаментом компании</li>
                           <li>формирование ИТ-стратегии и контроль ее исполнения</li>
                           <li>развитие внутренних ИТ-сервисов, повышение конкурентоспособности за счет внедрения AGILE методик и автоматизации процессов</li>
                           <li>управление процессом разработки информационных систем (Product Owner, Enterprise Архитектор)</li>
                           <li>планирование и контроль реализации внутренних и внешних ИТ-проектов: анализ, разработка решения, контроль качества, передача систем промышленную эксплуатацию и сопровождение</li>
                           <li>консультирование высшего менеджмента компании в принятии стратегических решений, связанных с ИТ</li>
                           <li>формализация политик информационной безопасности, проведение внутренних и внешних аудитов, внедрение решений по результатам</li>
                           <li>управление бюджетом департамента и проектов: формирование и контроль исполнения</li>
                           
                       </ul></div>
                       </div>
                       

                    </div>
                </div>
          


            </div>
        </div>

</template>

<script>
"use strict";
//import UIkit from 'uikit';
import moment from "moment";
moment.locale("ru");
//let startDate1 = ;
export default {
  data: function() {
    return {
      d1: moment("01.09.2009", "DD-MM-YYYY").format("MMM YYYY")
    };
  }
};
</script>

<style>
h5 {
  font-size: 1.2rem;
  line-height: 1.2;
}
</style>
