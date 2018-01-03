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
            <div class="uk-grid-divider uk-child-width-expand uk-grid-small uk-margin-small-top uk-grid" uk-grid>
                <div class="uk-width-1-6 uk-first-column">{{d1}} - н.в. </div>
                <div class="uk-width-5-6">
                    <h4 class="uk-margin-remove">РСМ РУСЬ (АКФ Топ-Аудит) <span uk-icon="icon: location"> </span>Москва</h4>
                    <h5 class="uk-margin-remove ">Заместитель генерального директора по ИТ / CTO</h5>
                    <hr class="uk-margin-small blue-border" />
                    <div class="skills uk-margin-small-top" uk-grid>
                        <div>
                            <ul class="uk-list uk-list-bullet">
                                <li>Оперативное управление ИТ-департаментом компании</li>
                                <li>Формирование ИТ-стратегии и контроль ее исполнения</li>
                                <li>Развитие внутренних ИТ-сервисов, повышение конкурентоспособности за счет внедрения AGILE методик и автоматизации процессов</li>
                                <li>Управление процессом разработки информационных систем (Product Owner, Enterprise Архитектор)</li>
                                <li>Планирование и контроль реализации внутренних и внешних ИТ-проектов: анализ, разработка решения, контроль качества, передача систем промышленную эксплуатацию и сопровождение</li>
                                <li>Консультирование высшего менеджмента компании в принятии стратегических решений, связанных с ИТ</li>
                                <li>Формализация политик информационной безопасности, проведение внутренних и внешних аудитов, внедрение решений по результатам</li>
                                <li>Управление бюджетом департамента и проектов: формирование и контроль исполнения</li>
                            </ul>
                        </div>
                    </div>
                    <h5 class="uk-margin-small-top uk-margin-small-bottom">Директор Департамента консалтинга <span class="small">{{d1}} - {{d11}}</span></h5>
                    <span>Отделы Корпоративных финансов, Бизнес-консультирования и ИТ </span>
                    <hr class="uk-margin-small blue-border-light" />
                    <div class="skills uk-margin-small-top" uk-grid>
                        <div>
                            <ul class="uk-list">
                                <li>Управление консалтинговыми проектами для международных и российских компаний (Государственные и Авиа компании, Промышленность, Страхование, Банки, Финансы, Телеком, FMCG и Ритейл)</li>

                            </ul>
                        </div>
                    </div>

                </div>


                <div class="uk-width-1-6 uk-first-column uk-margin-medium-top">{{d2}} - {{d1}} </div>
                <div class="uk-width-5-6 uk-margin-medium-top">
                    <h4 class="uk-margin-remove">Palace Industries (Chemical Products) <span uk-icon="icon: location"> </span>Израиль</h4>
                    <h5 class="uk-margin-remove ">Заместитель генерального директора по ИТ / CTO</h5>
                    <hr class="uk-margin-small blue-border" />
                    <div class="skills uk-margin-small-top" uk-grid>
                        <div>
                            <ul class="uk-list uk-list-bullet">
                                <li> Управление IT-функцией для обеспечения деятельности компании</li>
                                
                                <li> разработка и внедрение IТ-стратегии, включая политику информационной безопасности</li>
                                <li> управление персоналом: подбор, обучение, мотивация, постановка задач и контроль их исполнения (10 человек в подчинении)</li>
                                <li> формирование, защита и контроль исполнения годового бюджета</li>
                                <li> разработка и внедрение IT-решений, управление развитием ERP системы</li>
                                <li> cоздание Cлужбы внутреннего контроля и управления IT-рисками</li>
                                <li> управление процессом подготовки к IPO (в части ИТ)</li>
                                <li> мониторинг эффективности ПО и ИС, формирование планов модернизации и оптимизации</li>

                            </ul>
                        </div>
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
      d1: moment("01.09.2008", "DD-MM-YYYY").format("MMM YYYY"),
      d11: moment("01.09.2012", "DD-MM-YYYY").format("MMM YYYY"),
      d2: moment("01.01.2004", "DD-MM-YYYY").format("MMM YYYY")
    };
  }
};
</script>

<style>
h5 {
  font-size: 1.2rem;
  line-height: 1.2;
}

.small {
  font-size: calc(8px + (12 - 8) * ((100vw - 300px) / (1600 - 300)));
}
</style>

