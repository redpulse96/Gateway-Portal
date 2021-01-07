
import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        console.log("Cma here", request);
        if (
            request.url.indexOf("/azam/users/login") > -1 ||
            request.url.indexOf("/register") > -1
        ) {
            return next.handle(request);
        }
        const authToken = JSON.parse(localStorage.getItem("auth_app_token"));
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${authToken.value}`,
            },
        });

        return next.handle(request);
    }
}