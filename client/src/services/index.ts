import CustomHttpClient from '@/common/httpClient';
import HttpRequest from '@/common/httpRequest';

export class RootService {
  constructor() {
    const httpClient = new CustomHttpClient({
      baseUrl: import.meta.env.VITE_API_URL,
    });
    const httpRequest = new HttpRequest(httpClient);
  }
}
