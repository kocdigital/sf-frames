"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineSf = exports.revokeSf = exports.setServices = void 0;
const service_1 = require("./lib/service");
function revokeSf() {
    return window.sf;
}
exports.revokeSf = revokeSf;
const defineSf = (Vue, props, services) => {
    window.Vue = Vue;
    window.sf = window.sf || {
        i18n: props.i18n,
        services
    };
    window.sf.vue = new Vue(props).$mount('#app');
    window.sf.services.dialog = window.sf.vue.$dialog;
    window.sf.services.setTheme = service_1.setTheme;
    return revokeSf().vue;
};
exports.defineSf = defineSf;
const setServices = (services) => {
    window.sf = window.sf ? Object.assign(Object.assign({}, window.sf), { services }) : { services };
};
exports.setServices = setServices;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQWdEO0FBUWhELFNBQVMsUUFBUTtJQUNmLE9BQU8sTUFBTSxDQUFDLEVBQVEsQ0FBQTtBQUN4QixDQUFDO0FBc0JDLDRCQUFRO0FBcEJWLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRTtJQUN4QyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLElBQUk7UUFDdkIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1FBQ2hCLFFBQVE7S0FDVCxDQUFDO0lBRUYsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDbEQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLGtCQUFRLENBQUM7SUFFdkMsT0FBTyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDeEIsQ0FBQyxDQUFBO0FBU0MsNEJBQVE7QUFQVixNQUFNLFdBQVcsR0FBRyxDQUFDLFFBQWlCLEVBQUUsRUFBRTtJQUN4QyxNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxpQ0FBSyxNQUFNLENBQUMsRUFBRSxLQUFFLFFBQVEsSUFBRSxDQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUE7QUFHQyxrQ0FBVyJ9