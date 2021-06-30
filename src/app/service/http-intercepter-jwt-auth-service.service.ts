import { Injectable } from "@angular/core";
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpIntercepterJwtAuthServiceService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (localStorage.getItem("isLogedIn") === "1") {
      let jwtAuthHeaderString = "Bearer " + localStorage.getItem("token");
      req = req.clone({
        setHeaders: {
          Authorization: jwtAuthHeaderString,
        },
      });
      return next.handle(req);
    } else {
      return next.handle(req);
    }
  }
}
