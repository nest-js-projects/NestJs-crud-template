import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { ResponseDto } from '../dto/response.dto';

@Injectable()
export class WrapPayloadInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((payload) => {
        const statusCode = context.switchToHttp().getResponse().statusCode;
        return new ResponseDto('success', statusCode, payload);
      }),
    );
  }
}
