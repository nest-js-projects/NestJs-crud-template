export class ResponseDto {
  status: string;
  statusCode: number;
  data: any;
  error: any;

  constructor(
    status: string,
    statusCode: number,
    data: any = {},
    error: any = {},
  ) {
    this.status = status;
    this.statusCode = statusCode;
    this.data = data;
    this.error = error;
  }
}
