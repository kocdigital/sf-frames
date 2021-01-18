import {Service, setTheme} from './lib/service';

interface SF {
  vue?: any;
  i18n?: any;
  services: Service;
}

function revokeSf(): SF {
  return window.sf as SF
}

const defineSf = (Vue, props, services) => {
  window.Vue = Vue;
  window.sf = window.sf || {
    i18n: props.i18n,
    services
  };

  window.sf.vue = new Vue(props).$mount('#app');
  window.sf.services.dialog = window.sf.vue.$dialog;
  window.sf.services.setTheme = setTheme;

  return revokeSf().vue;
}

const setServices = (services: Service) => {
  window.sf = window.sf ? {...window.sf, services} : {services};
}

export {
  setServices,
  revokeSf,
  defineSf,
  SF
};
