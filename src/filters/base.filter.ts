import { ValidationError } from 'class-validator';
import { inArray } from 'src/utils/in-array';

export interface IErrorResponse {
  error: boolean;
  statusCode: number;
  message: string;
  reason?: any;
}

export function whatErrorOccured(params: any, status: number): IErrorResponse {
  return {
    error: true,
    statusCode: status,
    message: whatMessage(params),
    reason: whatReason(params),
  };
}

function whatMessage(params: any): string {
  const theMsgType = typeof params?.message;
  const theErrType = typeof params?.error;

  let err = '';
  if (theErrType == 'string') {
    err = params?.error;
  }

  if (theMsgType == 'string') {
    return err + ' | ' + params?.message;
  }

  return err;
}

function whatReason(params: any): Array<any> {
  const theMsgType = typeof params?.message;
  const arrSingular = ['string', 'number', 'bigint', 'boolean', 'undefined'];
  if (inArray(arrSingular, theMsgType)) {
    return [params?.message];
  }

  const isArray = Array.isArray(params?.message);
  const isValidationError = params?.message[0] instanceof ValidationError;
  if (isArray && isValidationError) {
    const validationErrors = params?.message as ValidationError[];
    const arr = validationErrors.map((element: ValidationError) => ({
      [element.property]: Object.values(element.constraints),
    }));
    return arr;
  }

  //  "symbol" | "object" | "function"
  const arr = params?.message != 'undefined' ? params?.message : [];
  return arr;
}
