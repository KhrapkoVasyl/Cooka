import { RootStore } from '@/stores/root.store';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { ErrorHandler } from './errorHandler';

export type HttpClientRequestConfig = {
  url: string;
  method: string;
  data?: any;
  isAuth?: boolean;
};

export interface IHttpClient {
  baseUrl: string;
  request<T>(config: HttpClientRequestConfig): Promise<T | null>;
}

type CustomHttpClientArgs = {
  baseUrl: string;
  rootStore?: RootStore;
};

class CustomHttpClient implements IHttpClient {
  private axios: AxiosInstance = axios.create();
  private errorHandler: ErrorHandler = new ErrorHandler();

  baseUrl: string;

  constructor({ baseUrl }: CustomHttpClientArgs) {
    this.baseUrl = baseUrl;
  }

  async request<T>({ url, method }: HttpClientRequestConfig) {
    const requestConfig: AxiosRequestConfig = {
      url: this.baseUrl + url,
      method,
    };

    try {
      const res = await this.axios.request<T>(requestConfig);
      return res?.data;
    } catch (err) {
      this.errorHandler.handle(String(err as AxiosError));
    }

    return null;
  }
}

export default CustomHttpClient;
