<template>
    <div class="uk-section uk-padding-small color-black uk-preserve-color">
        <div class="uk-container uk-text-justify">
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
                    <div class="font-8-line-13 uk-margin-small-top" uk-grid>
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
                    <h5 class="uk-margin-small-top uk-margin-small-bottom">Директор Департамента консалтинга <span class="font-8">{{d1}} - {{d11}}</span></h5>
                                        <hr class="uk-margin-small blue-border-light" />
                    <div class="font-8-line-13 uk-margin-small-top" uk-grid>
                        <div>
                            <span>Отделы Корпоративных финансов, Бизнес-консультирования и ИТ </span>
                            <ul class="uk-list">
                                <li>Управление консалтинговыми проектами для международных и российских компаний (Государственные и Авиа компании, Промышленность, Страхование, Банки, Финансы, Телеком, FMCG и Ритейл)</li>

                            </ul>
                        </div>
                    </div>

                </div>


                <div class="uk-width-1-6 uk-first-column uk-margin-medium-top">{{d2}} - {{d1}} </div>
                <div class="uk-width-5-6 uk-margin-medium-top">
                    <h4 class="uk-margin-remove">Palace Industries (Chemical Products) <span uk-icon="icon: location"> </span>Израиль</h4>
                    <h5 class="uk-margin-remove ">ИТ Директор</h5>
                    <hr class="uk-margin-small blue-border" />
                    <div class="font-8-line-13 uk-margin-small-top" uk-grid>
                        <div>
                            <ul class="uk-list uk-list-bullet">
                                <li>Управление IT-функцией для обеспечения деятельности компании</li>
                                <li>Разработка и внедрение IТ-стратегии, включая политику информационной безопасности</li>
                                <li>Управление персоналом: подбор, обучение, мотивация, постановка задач и контроль их исполнения (10 человек в подчинении)</li>
                                <li>Формирование, защита и контроль исполнения годового бюджета</li>
                                <li>Разработка и внедрение IT-решений, управление развитием ERP системы</li>
                                <li>Создание Cлужбы внутреннего контроля и управления IT-рисками</li>
                                <li>Управление процессом подготовки к IPO (в части ИТ)</li>
                                <li>Мониторинг эффективности информационных систем, формирование планов модернизации и оптимизации</li>

                            </ul>
                        </div>
                    </div>


                </div>

            </div>
          
            <div class="uk-grid-small uk-grid" uk-grid>
                <div class="uk-width-auto@s uk-first-column uk-visible@s">
                    <span uk-icon="icon: bolt"></span>
                </div>
                <div class="uk-width-expand@s   overview">
                    <h3>Релизованные проекты</h3>
                </div>
            </div>
            <div class="uk-grid-divider uk-child-width-expand uk-grid-small uk-margin-small-top uk-grid" uk-grid>
                <div class="uk-width-1-6 uk-first-column"></div>
                <div class="uk-width-5-6">
                    <h4 class="uk-margin-remove">Разработка корпоративных информационных систем </h4>
                   <app-project>
                       <h5 class="uk-margin-small-top uk-margin-small-bottom" slot="title">Система управления активами Холдинга - С.У.П.Р.А </h5>
                       <div slot="description">Разработанная и переданная в промышленную эксплуатацию информационная система управления активами (далее – СУПРА). В СУПРА работают 250 специалистов из 60 предприятий. СУПРА является источником корпоративной информации о состоянии активов предприятий для специалистов по управлению имуществом, юридического департамента и совета директоров Холдинга.</div>
                   </app-project>
                   <app-project>
                       <h5 class="uk-margin-small-top uk-margin-small-bottom" slot="title">Корпоративное Бюджетирование и Казначейство  </h5>
                       <div slot="description">Разработанная и переданная в промышленную эксплуатацию информационная система централизованного Бюджетирования и Казначейства на базе «1С:Консолидация». В системе работают 350 специалистов из 80 предприятий. Система является оперативным инструментом для контроля платежных заявок и осуществления платежных поручений через уполномоченные банки. Информационное пространство позволяет в онлайн режиме отслеживать соответствие расходов и плановых бюджетов предприятий, согласовывать движение денежных средств и осуществлять платежи. Аналитические механизмы системы являются источником корпоративной информации для планово-экономического блока Холдинга и используются для отчетности в наблюдательные органы управления.</div>
                   </app-project>
                   <app-project>
                       <h5 class="uk-margin-small-top uk-margin-small-bottom" slot="title">Система сбора, трансформации и консолодации отчетности по МСФО</h5>
                       <div slot="description">Разработана методика для первого применения и ежегодного составления отчетности в соответствии с Международными стандартами финансовой отчетности (далее – МСФО), включая: формализация учетной политики в соответствии с МСФО, инструменты сбора исходных данных, методику расчетов примечаний по МСФО и инструкции по заполнению форм сбора и выполнению расчетов. На основании сформулированной методологии составления отчетности разработанная и переданная в промышленную эксплуатацию автоматизированная системы сбора и консолидации отчетности на базе платформы «1С:Консолидация».<br />
По итогам разработки, информационная система удачно прошла приемо-сдаточные испытания гос. комиссии и была переданная в опытную эксплуатацию. В Систему загружены финансовые данные за 2013-2016г. более 700 организаций.<br />
 Собранная и трансформированная отчетность в соответствии с МСФО прошла внешний аудит (Big-4) и получила положительное заключение.
</div>
                   </app-project>
                   <app-project>
                       <h5 class="uk-margin-small-top uk-margin-small-bottom" slot="title"></h5>
                       <div slot="description"></div>
                   </app-project>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
"use strict";
//import UIkit from 'uikit';
import AppProject from "./Projects.vue";
import moment from "moment";
moment.locale("ru");

export default {
  components: {
    "app-project": AppProject
  },
  data: function() {
    return {
      d1: moment("01.09.2008", "DD-MM-YYYY").format("MMM YYYY"),
      d11: moment("01.09.2012", "DD-MM-YYYY").format("MMM YYYY"),
      d2: moment("01.01.2004", "DD-MM-YYYY").format("MMM YYYY"),
      d3: moment("01.01.2002", "DD-MM-YYYY").format("YYYY"),
      d31: moment("01.01.2007", "DD-MM-YYYY").format("YYYY"),
      d2014: moment("01.01.2014", "DD-MM-YYYY").format("YYYY"),
      d2015: moment("01.01.2015", "DD-MM-YYYY").format("YYYY"),
      d2016: moment("01.01.2016", "DD-MM-YYYY").format("YYYY"),
      d2017: moment("01.01.2017", "DD-MM-YYYY").format("YYYY")
    };
  }
};
</script>

<style>

</style>
