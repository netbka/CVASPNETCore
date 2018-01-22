<template>
    <div>
        <div class="uk-section uk-section-default uk-padding-small">
            <div class="uk-container">
                <img alt="аватар" :src="avatar" class="uk-border-circle uk-align-center uk-responsive-width">
            </div>
            <div class="uk-container uk-text-center">
                <span class="uk-text-primary  uk-text-bold">{{fio}} </span><span class="uk-text-primary">({{age}} лет)</span>
                <hr class="uk-margin-small blue-border" />
                <div class="uk-text-left uk-text-bold">{{position}} </div>
                <div class="uk-text-left"><span class="uk-text-bold">Языки: </span><span class="">{{lang}}</span> </div>
                <div class="uk-text-left"><span class="uk-text-bold">Местонахождение: </span> {{location}} </div>
                <div class="uk-text-left"><span class="uk-text-bold">Образование: </span><span class="">{{educationShort}}</span> </div>
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
                    <div class="uk-width-expand@s">
                        <h3> Обо мне</h3>
                    </div>
                    <ul class="uk-list uk-list-large font-9-line-13 uk-margin-remove">
                        <li class="uk-margin-small-top">19 лет опыта работы в области ИТ, 9 лет на позициях ТОП-менеджмента (в том числе за границей)</li>
                        <li class="uk-margin-small-top">Разработка, внедрение и эксплуатация корпоративных информационных систем - Product Owner (ERP, CRM, PMO, системы внутреннего контроля и риски, управление активами, бюджетирование и казначейство)</li>
                        <li class="uk-margin-small-top">Проектирование центров обработки данных</li>
                        <li class="uk-margin-small-top">Оказание профессиональных услуг для коммерческих организаций и государственных структур</li>
                        <li class="uk-margin-small-top">Организация службы Service Desk</li>
                        <li class="uk-margin-small-top">Формализации ИТ-стратегии и внедрение политик информационной безопасности</li>
                        <li class="uk-margin-small-top">Подбор кадров и управление профессиональной командой</li>
                        <li class="uk-margin-small-top">Опыт в качестве Лектора по подготовке ИТ-специалистов для получения сертификата Microsoft MCSE</li>
                    </ul>

                </div>
            </div>
        </div>
        <div class="uk-section uk-padding-small border-top-blue color-black uk-preserve-color">
            <div class="uk-container">
                <div class="uk-grid-small uk-grid" uk-grid>
                    <div class="uk-width-auto@s uk-first-column uk-visible@s ">
                        <span uk-icon="icon: cog"></span>
                    </div>
                    <div class="uk-width-expand@s   font-9-line-13">
                        <h3> Навыки и технологии</h3>
                    </div>
                </div>
                <div class="uk-grid-divider uk-grid-small uk-child-width-expand@s font-8-line-13 uk-margin-small-top" uk-grid>
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
                <div class="uk-grid-divider uk-grid-small uk-child-width-expand@s font-8-line-13 uk-margin-small-top" uk-grid>
                    <div>Проектирование и разработка бизнес приложений на платформах </div>
                    <div>
                        <span class="uk-label labelS label-grey">1C</span>&nbsp;
                        <span class="uk-label labelS label-grey">SharePoint</span>&nbsp;
                        <span class="uk-label labelS label-grey">Documentum</span>&nbsp;
                        <span class="uk-label labelS label-grey">Priority</span>
                    </div>
                </div>
                <div class="uk-grid-divider uk-grid-small uk-child-width-expand@s font-8-line-13 uk-margin-small-top" uk-grid>
                    <div>Управление службами MS Server Family </div>
                    <div>
                        <span class="uk-label labelS label-grey">AD</span>&nbsp;
                        <span class="uk-label labelS label-grey">DNS</span>&nbsp;
                        <span class="uk-label labelS label-grey">GPO</span>&nbsp;
                        <span class="uk-label labelS label-grey">DHCP</span>&nbsp;
                        <span class="uk-label labelS label-grey">WSUS</span>&nbsp;
                        <span class="uk-label labelS label-grey">ADFS</span>&nbsp;
                        <span class="uk-label labelS label-grey">IIS</span>&nbsp;
                        <span class="uk-label labelS label-grey">Exchange</span>
                    </div>
                </div>
                <div class="uk-grid-divider uk-grid-small uk-child-width-expand@s font-8-line-13 uk-margin-small-top" uk-grid>
                    <div>Виртуализация </div>
                    <div>
                        <span class="uk-label labelS label-grey">Hyper-V </span>&nbsp;
                        <span class="uk-label labelS label-grey">VMware</span>
                        <span class="uk-label labelS label-grey">Docker</span>
                    </div>
                </div>
                <div class="uk-grid-divider uk-grid-small uk-child-width-expand@s font-8-line-13 uk-margin-small-top" uk-grid>
                    <div>Язык программирования и фреймворки </div>
                    <div>
                        <span class="uk-label labelS label-grey">C#</span>&nbsp;
                        <span class="uk-label labelS label-grey">Javascript</span>&nbsp;
                        <span class="uk-label labelS label-grey">ASP.NET</span>&nbsp;
                        <span class="uk-label labelS label-grey">.Net Core</span>&nbsp;
                        <span class="uk-label labelS label-grey">Vue.Js</span>&nbsp;
                        <span class="uk-label labelS label-grey">SCSS & CSS</span>

                    </div>
                </div>
                <div class="uk-grid-divider uk-grid-small uk-child-width-expand@s font-8-line-13 uk-margin-small-top" uk-grid>
                    <div>Непрерывная поставка и интеграция (CI & CD) - DevOps </div>
                    <div>
                        <span class="uk-label labelS label-grey">Teamcity</span>&nbsp;
                        <span class="uk-label labelS label-grey">Jenkins</span>
                        <span class="uk-label labelS label-grey">TFS</span>&nbsp;
                        <span class="uk-label labelS label-grey">Git</span>&nbsp;
                        <span class="uk-label labelS">Agile</span>
                    </div>
                </div>
                <div class="uk-grid-divider uk-grid-small uk-child-width-expand@s font-8-line-13 uk-margin-small-top" uk-grid>
                    <div>Информационная безопасность</div>
                    <div>
                        <span class="uk-label labelS label-grey">ФЗ №152</span>&nbsp;
                        <span class="uk-label labelS label-grey">COBiT</span>&nbsp;
                        <span class="uk-label labelS label-grey">CISSP</span>

                    </div>
                </div>
                <div class="uk-grid-divider uk-grid-small uk-child-width-expand@s font-8-line-13 uk-margin-small-top" uk-grid>
                    <div>Проектирование и разработка баз данных</div>
                    <div>
                        <span class="uk-label labelS label-grey">MS SQL</span>&nbsp;
                        <span class="uk-label labelS label-grey">MySQL</span>
                    </div>
                </div>

            </div>
        </div>

        <div class="uk-section uk-section-primary uk-padding-small border-top-blue color-black uk-preserve-color">
            <div class="uk-container">
                <div class="uk-grid-small uk-grid" uk-grid>
                    <div class="uk-width-auto@s uk-first-column uk-visible@s ">
                        <span class="uk-icon uk-icon-image" uk-icon="ratio: 2" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik00NDUuNzg4LDE1NC41NjFMMjU5LjAyNyw4Ny44NThjLTEuOTU3LTAuNjk5LTQuMDk4LTAuNjk5LTYuMDU1LDBMNjYuMjEyLDE1NC41NjFjLTMuNjE0LDEuMjkxLTYuMDEzLDQuNzMzLTUuOTcyLDguNTcxICAgYzAuMDQsMy44MzgsMi41MTEsNy4yMjksNi4xNTIsOC40NDNsNzUuNjQyLDI1LjIyMXY4Ny45YzAsNC4wMTIsMi42NTUsNy41NCw2LjUxMiw4LjY0OWwxMDQuOTY2LDMwLjIwMyAgIGMwLjgxMywwLjIzMywxLjY1LDAuMzUxLDIuNDg4LDAuMzUxczEuNjc2LTAuMTE3LDIuNDg4LTAuMzUxbDMzLjA1MS05LjUxYzQuNzc3LTEuMzc1LDcuNTM1LTYuMzYxLDYuMTYxLTExLjEzOCAgIGMtMS4zNzUtNC43NzctNi4zNTgtNy41MzctMTEuMTM4LTYuMTYxTDI1NiwzMDUuNTMzbC05NS45NjYtMjcuNjEzdi03NS4xMjNsOTMuMTE5LDMxLjA0OGMxLjg0OCwwLjYxNiwzLjg0NiwwLjYxNyw1LjY5MywwICAgbDE2LjcyLTUuNTc0YzAuMDAyLDAsMC4wMDMtMC4wMDEsMC4wMDUtMC4wMDJsMTQuMDgzLTQuNjk1YzQuNzE1LTEuNTcyLDcuMjY0LTYuNjY5LDUuNjkxLTExLjM4NSAgIGMtMS41NzMtNC43MTUtNi42NjktNy4yNjUtMTEuMzg1LTUuNjkxTDI1NiwyMTUuODJsLTgzLjY4Ni0yNy45MDNsLTc1LjQ5OS0yNS4xNzNMMjU2LDEwNS44OWwxNTkuMTg1LDU2Ljg1NGwtNTcuMDY0LDE5LjAyNyAgIGMtMC4wMDEsMC0wLjAwMSwwLTAuMDAxLDBsLTcuMDQzLDIuMzQ4bC01LjgwNiwxLjkzNmMwLDAtMC4wMDEsMC0wLjAwMSwwbC05LjAwMiwzLjAwMWMtNC43MTYsMS41NzItNy4yNjQsNi42NjktNS42OTEsMTEuMzg1ICAgYzEuNTcyLDQuNzE1LDYuNjY3LDcuMjYsMTEuMzg1LDUuNjkxbDEwLjAwNS0zLjMzNnY3NS4xMjNsLTExLjIxOCwzLjIyOGMtNC43NzcsMS4zNzUtNy41MzUsNi4zNjEtNi4xNjEsMTEuMTM4ICAgYzEuMTM2LDMuOTQ2LDQuNzM0LDYuNTE0LDguNjQ2LDYuNTE0YzAuODIzLDAsMS42NjEtMC4xMTMsMi40OTItMC4zNTNsMTcuNzI5LTUuMTAyYzMuODU2LTEuMTA5LDYuNTEyLTQuNjM4LDYuNTEyLTguNjQ5di04Ny45ICAgbDc1LjY0Mi0yNS4yMjFjMy42NDItMS4yMTQsNi4xMTItNC42MDQsNi4xNTItOC40NDNDNDUxLjgwMSwxNTkuMjkzLDQ0OS40MDIsMTU1Ljg1Miw0NDUuNzg4LDE1NC41NjF6Ii8+PHBhdGggZD0iTTMyNS4yMTMsMjA0Ljk4NmMtMC4wMDYtMC4yMDgtMC4wMTItMC40MTctMC4wMzItMC42MjVjLTAuMDE1LTAuMTUxLTAuMDQxLTAuMjk4LTAuMDYzLTAuNDQ3ICAgYy0wLjAyMS0wLjE0LTAuMDM2LTAuMjc5LTAuMDYzLTAuNDE3Yy0wLjAzMi0wLjE2Ni0wLjA3Ni0wLjMyOC0wLjExNy0wLjQ5Yy0wLjAzMS0wLjEyLTAuMDU4LTAuMjQxLTAuMDkzLTAuMzYgICBjLTAuMDQ4LTAuMTYtMC4xMDUtMC4zMTQtMC4xNjEtMC40N2MtMC4wNDQtMC4xMjEtMC4wODQtMC4yNDItMC4xMzMtMC4zNjFjLTAuMDU4LTAuMTQyLTAuMTI1LTAuMjc4LTAuMTg5LTAuNDE2ICAgYy0wLjA2MS0wLjEyOS0wLjExOS0wLjI2LTAuMTg3LTAuMzg3Yy0wLjA2NC0wLjEyMi0wLjEzNy0wLjIzOC0wLjIwNi0wLjM1NWMtMC4wOC0wLjEzNS0wLjE1OC0wLjI3MS0wLjI0NS0wLjQwMyAgIGMtMC4wNzMtMC4xMS0wLjE1NC0wLjIxNS0wLjIzMy0wLjMyM2MtMC4wOTQtMC4xMjgtMC4xODUtMC4yNTgtMC4yODUtMC4zODJjLTAuMDk3LTAuMTE4LTAuMjAxLTAuMjI5LTAuMzAzLTAuMzQxICAgYy0wLjA5NC0wLjEwNC0wLjE4My0wLjIxLTAuMjgxLTAuMzFjLTAuMTYtMC4xNjItMC4zMy0wLjMxMy0wLjUwMi0wLjQ2MmMtMC4wNDgtMC4wNDItMC4wOS0wLjA4Ny0wLjEzOS0wLjEyOGwtMC4wMjItMC4wMTkgICBjLTAuMDA1LTAuMDA0LTAuMDExLTAuMDA5LTAuMDE3LTAuMDE0bC02MC4xODYtNTAuMDc1Yy0zLjgxOS0zLjE3OS05LjQ5NC0yLjY1OS0xMi42NzUsMS4xNjIgICBjLTMuMTc5LDMuODIxLTIuNjU4LDkuNDk2LDEuMTYzLDEyLjY3NWw1Ni45OCw0Ny40MDh2MTU5LjU1NmMtOS45ODgsMi4wNTItMTcuNTIyLDEwLjkxLTE3LjUyMiwyMS40OTZ2MTIuMjI1ICAgYzAsMTIuMSw5Ljg0NCwyMS45NDMsMjEuOTQzLDIxLjk0M2gxMi4yMjZjMTIuMSwwLDIxLjk0My05Ljg0NCwyMS45NDMtMjEuOTQzdi0xMi4yMjVjMC0xMS42NDUtOS4xMTktMjEuMTk1LTIwLjU5LTIxLjg5N1YyMDUuMjcxICAgYzAtMC4wMDIsMC0wLjAwNSwwLTAuMDA4di0wLjAzN0MzMjUuMjI1LDIwNS4xNDYsMzI1LjIxNSwyMDUuMDY3LDMyNS4yMTMsMjA0Ljk4NnogTTMyNy44MTQsMzkwLjQ5OHYxMi4yMjUgICBjMCwyLjE3NS0xLjc2OSwzLjk0My0zLjk0MywzLjk0M2gtMTIuMjI2Yy0yLjE3NSwwLTMuOTQzLTEuNzY5LTMuOTQzLTMuOTQzdi0xMi4yMjVjMC0yLjE3NSwxLjc2OS0zLjk0MywzLjk0My0zLjk0M2gxMi4yMjYgICBDMzI2LjA0NiwzODYuNTU1LDMyNy44MTQsMzg4LjMyMywzMjcuODE0LDM5MC40OTh6Ii8+PC9nPjwvc3ZnPg==');"></span>
                    </div>
                    <div class="uk-width-expand@s">
                        <h3>Образование</h3>
                    </div>
                </div>
                <div class="uk-card uk-card-small">
                    <div class="uk-card-header uk-padding-remove  uk-box-shadow-small">
                        <div class="uk-grid-small uk-margin-small-top" uk-grid>
                            <div class="uk-width-auto">
                                <img :src="bgulogo" width="48" height="48" alt="Логотип" class="uk-border-circle">
                            </div>
                            <div class="uk-width-expand">
                                <h5 class="uk-card-title uk-margin-remove">Университет им. Бен-Гурион</h5>
                                <h5 class="uk-margin-remove">Факультет сетевых коммуникаций</h5>
                            </div>
                        </div>
                        <hr class="uk-margin-small blue-border-light" />
                    </div>
                    <div class="uk-card-body uk-padding-remove uk-margin-small-top">
                        <p class="font-9-line-13"><b>Диплом:</b> B.Sc Инженер информационной безопасности и систем связи</p>
                    </div>

                </div>
            </div>
        </div>

        <div class="uk-section uk-padding-small border-top-blue color-black uk-preserve-color">
            <div class="uk-container">
                <div class="uk-grid-small uk-grid" uk-grid>
                    <div class="uk-width-auto@s uk-first-column uk-visible@s ">

                    </div>
                    <div class="uk-width-expand@s">
                        <h3>Повышение квалификации</h3>
                    </div>
                </div>
                <div class="uk-card uk-card-small">
                    <div class="uk-card-header uk-padding-remove  uk-box-shadow-small">
                        <div class="uk-grid-small uk-margin-small-top" uk-grid>
                            <div class="uk-width-auto">
                                <img :src="pslogo" width="48" height="48" alt="Логотип" class="uk-border-circle">
                            </div>
                            <div class="uk-width-expand">
                                <h5 class="uk-card-title uk-margin-remove">Pluralsight.com</h5>
                                <h5 class="uk-margin-remove">Онлайн Академия</h5>
                            </div>
                        </div>
                        <hr class="uk-margin-small blue-border-light" />
                    </div>
                    <div class="uk-card-body uk-padding-remove uk-margin-small-top">
                        <ul class="uk-list uk-list-bullet font-8">
                            <li>"Implementing and Securing an API with ASP.NET Core"</li>
                            <li>"Docker Images and Containers for ASP.NET Core"</li>
                            <li>"Implement Active Directory Domain Services in Windows Server 2016"</li>
                            <li>"Manage and Maintain Active Directory Domain Services in Windows Server 2016"</li>
                            <li>"Migrating to Exchange Server 2016"</li>
                            <li>"Designing/Deploying Exchange 2016: Hybrid & Migrations, Recipients & Security"</li>
                            <li>"ASP.NET Core Fundamentals"</li>
                            <li>"Building an Enterprise Application with ASP.NET Core MVC"</li>
                            <li>"CISSP - Security & Risk Management"</li>
                            <li>"Building a JavaScript Development Environment"</li>
                            <li>"Angular Fundamentals"</li>
                        </ul>

                    </div>

                </div>

                <div class="uk-card uk-card-small">
                    <div class="uk-card-header uk-padding-remove  uk-box-shadow-small">
                        <div class="uk-grid-small uk-margin-small-top" uk-grid>
                            <div class="uk-width-auto">
                                <img :src="rsmlogo" height="48" alt="Логотип">
                            </div>
                            <div class="uk-width-expand">
                                <h5 class="uk-card-title uk-margin-remove">RSM</h5>
                                <h5 class="uk-margin-remove">Академия</h5>
                            </div>
                        </div>
                        <hr class="uk-margin-small blue-border-light" />
                    </div>
                    <div class="uk-card-body uk-padding-remove uk-margin-small-top">
                        <ul class="uk-list uk-list-bullet font-8">
                            <li>"CISSP - Security & Risk Management"</li>
                            <li>"CISSP - Asset Security, Security Engineering"</li>
                            <li>"CISSP - Communications and Network Security"</li>
                            <li>"CISSP - Identity and Access Management"</li>
                            <li>"CISSP - Security Assessment and Testing, Security Operations, Software Development Security"</li>
                        </ul>

                    </div>

                </div>
               

 <div class="uk-card uk-card-small">
                    <div class="uk-card-header uk-padding-remove  uk-box-shadow-small">
                        <div class="uk-grid-small uk-margin-small-top" uk-grid>
                            <div class="uk-width-auto">
                                <img :src="talogo" height="48" alt="Логотип">
                            </div>
                            <div class="uk-width-expand">
                                <h5 class="uk-card-title uk-margin-remove">Топ-Аудит</h5>
                                <h5 class="uk-margin-remove">Академия</h5>
                            </div>
                        </div>
                        <hr class="uk-margin-small blue-border-light" />
                    </div>
                    <div class="uk-card-body uk-padding-remove uk-margin-small-top">
                        <ul class="uk-list uk-list-bullet font-8">
                           
                            <li>"Implementing DevOps in the Real World"</li>
                            <li>"AgilePM Project Management"</li>
                            <li>"Автоматизация казначейства в гос. структурах / интеграция АС ЕКК"</li>
                            <li>"Agile Estimation & Fundamentals"</li>
                            <li>"Принципы автоматизации консолидированной отчетности по МСФО - для Холдингов"</li>

                        </ul>

                    </div>

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

let educationShort = "Инженер информационной безопасности и систем связи";
let location = "Россия (Москва)";
let tooltipLinkedin = "Профиль в LinkedIn";
let tooltipMail = "Отправить мне сообщение";
let tooltipDownload = "Скачать резюме";
import avatarBig from "../GlobalAssets/Images/avatar.jpg";
import bgulogo from "../GlobalAssets/Images/bgulogo.png";
import pslogo from "../GlobalAssets/Images/pslogo.png";
import rsmlogo from "../GlobalAssets/Images/rsmlogo.png";
import talogo from "../GlobalAssets/Images/talogo.png";
export default {
  data: function() {
    return {
      avatar: avatarBig,
      fio: fio,
      age: age,
      position: position,
      lang: lang,
      bgulogo: bgulogo,
      pslogo: pslogo,
      rsmlogo: rsmlogo,
      talogo: talogo,
      educationShort: educationShort,
      location: location,
      tooltipLinkedin: tooltipLinkedin,
      tooltipMail: tooltipMail,
      tooltipDownload: tooltipDownload
    };
  }
};
</script>

<style>


.labelS {
  font-size: calc(6px + (12 - 6) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1.3;
}

.label-grey {
  background: #5c6267;
}
</style>

