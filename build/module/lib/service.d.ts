import { AxiosInstance } from 'axios';
export interface Service {
    createSecureInstance(baseUrl: string): AxiosInstance;
    createUnsecureInstance(baseUrl: string): AxiosInstance;
    getToken(): string;
    getSettings(): any;
    setConfig(value: any): any;
    signOut(): any;
    checkUser(): any;
}