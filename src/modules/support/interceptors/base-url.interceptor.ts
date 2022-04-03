import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let url = request.url;

    // if the request URL have the @ string prefix, then is a custom server request
    if (url.indexOf('@') === 0) {
      const segments = url.split('/');
      const name : string = segments.shift() || '';

      url = url.replace(name, (environment as any).servers[name] || '');

      // clone the http request, avoids mutation on the request object.
      // This is required so by the angular framework.
      request = request.clone({
        url
      });
    }

    return next.handle(request);
  }
}
