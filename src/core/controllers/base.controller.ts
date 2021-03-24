import { BaseRESTResponse } from '../types/base-rest-response.type';

export class BaseController {
  async response(message: string, data?: any): Promise<BaseRESTResponse> {
    const dt = data ? data : [];
    return {
      error: false,
      message: message,
      data: dt,
    };
  }
}
