"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineSf = exports.revokeSf = exports.setServices = void 0;
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
    return revokeSf().vue;
};
exports.defineSf = defineSf;
const setServices = (services) => {
    window.sf = window.sf ? Object.assign(Object.assign({}, window.sf), { services }) : { services };
};
exports.setServices = setServices;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBUUEsU0FBUyxRQUFRO0lBQ2YsT0FBTyxNQUFNLENBQUMsRUFBUSxDQUFBO0FBQ3hCLENBQUM7QUFxQkMsNEJBQVE7QUFuQlYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFO0lBQ3hDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsSUFBSTtRQUN2QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7UUFDaEIsUUFBUTtLQUNULENBQUM7SUFFRixNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUVsRCxPQUFPLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUN4QixDQUFDLENBQUE7QUFTQyw0QkFBUTtBQVBWLE1BQU0sV0FBVyxHQUFHLENBQUMsUUFBaUIsRUFBRSxFQUFFO0lBQ3hDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGlDQUFLLE1BQU0sQ0FBQyxFQUFFLEtBQUUsUUFBUSxJQUFFLENBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDO0FBQ2hFLENBQUMsQ0FBQTtBQUdDLGtDQUFXIn0=