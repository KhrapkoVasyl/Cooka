import { HttpRequest } from '@/common/httpRequest';

class BaseService {
  httpRequest: HttpRequest;

  constructor(httpRequest: HttpRequest) {
    this.httpRequest = httpRequest;
  }
}

export default BaseService;
