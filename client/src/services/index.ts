import CustomHttpClient from '@/utils/common/httpClient';
import HttpRequest from '@/utils/common/httpRequest';
import { AuthService } from './auth.service';

export class RootService {
  authService: AuthService;

  constructor() {
    const httpClient = new CustomHttpClient({
      baseUrl: import.meta.env.VITE_API_URL,
    });
    const httpRequest = new HttpRequest(httpClient);

    this.authService = new AuthService(httpRequest);
  }
}
