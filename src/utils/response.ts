export async function response(message: string, data: any): Promise<any> {
  return {
    message: message,
    data: data,
  };
}
