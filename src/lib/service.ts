import {AxiosInstance} from 'axios';

export function setTheme(isDark:boolean){
  const main = document.getElementById('main_content');

  if (isDark) {
    const darkers = main?.querySelectorAll('.theme--dark') || [];

    darkers.forEach(x => {
      x.classList.remove('theme--dark');
      x.classList.add('theme--light');
    });
  } else {
    const darkers = main?.querySelectorAll('.theme--light') || [];

    darkers.forEach(x => {
      x.classList.remove('theme--light');
      x.classList.add('theme--dark');
    });
  }
}

export interface Service {
  createSecureInstance(baseUrl: string): AxiosInstance;
  createUnsecureInstance(baseUrl: string): AxiosInstance;
  getToken(): string;
  getSettings(): any;
  setConfig(value: any): any;
  signOut();
  checkUser(): any;
  store: any;
  vuetify: any;
  dialog: any;
  router: any;
  setTheme(isDark: boolean): void
}
