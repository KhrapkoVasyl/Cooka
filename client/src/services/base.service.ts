import { HttpRequest } from '@/utils/common/httpRequest';

class BaseService {
  httpRequest: HttpRequest;

  constructor(httpRequest: HttpRequest) {
    this.httpRequest = httpRequest;
  }
}

export default BaseService;
