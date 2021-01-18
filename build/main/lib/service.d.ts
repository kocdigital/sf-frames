import { AxiosInstance } from 'axios';
export declare function setTheme(isDark: boolean): void;
export interface Service {
    createSecureInstance(baseUrl: string): AxiosInstance;
    createUnsecureInstance(baseUrl: string): AxiosInstance;
    getToken(): string;
    getSettings(): any;
    setConfig(value: any): any;
    signOut(): any;
    checkUser(): any;
    store: any;
    vuetify: any;
    dialog: any;
    router: any;
    setTheme(isDark: boolean): void;
}
