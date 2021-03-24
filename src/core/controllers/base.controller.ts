interface BaseRESTResponse {
  error: boolean;
  message: string;
  data: any;
}

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
