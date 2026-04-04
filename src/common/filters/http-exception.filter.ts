import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import * as express from 'express';
import { ResponseHelper } from '../helpers/response.helper';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<express.Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal Server Error';
    let data: any = null;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
        // Handle class-validator messages
        const resObj = exceptionResponse as any;
        if (Array.isArray(resObj.message)) {
          // Join validation errors into a single string or keep as object if needed
          // Based on user request, they want it as data or message
          // Given the example, let's map it to data.errors or similar if multiple
          message = resObj.message[0]; // Take the first one as the primary message
          data = { errors: resObj.message };
        } else {
          message = resObj.message || exception.message;
        }
      } else {
        message = exception.message;
      }
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    // Use ResponseHelper.error which sets res.status and returns the standard object
    const result = ResponseHelper.error(response, {
      message,
      status,
      data,
    });

    // Send the response
    response.json(result);
  }
}
