import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}
  SER_SEC_API_URL = "http://localhost:9093/api";
  username: string;
  jwt: string;
  roles: Array<string>;

  login(data) {
    return this.http.post(`${this.SER_SEC_API_URL}/login`, data, {
      observe: "response",
    });
  }

  saveToken(jwt: string) {
    localStorage.setItem("token", jwt);
    this.jwt = jwt;
    this.parseJWT();

  }

  parseJWT() {
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.sub;
    localStorage.setItem("Role", objJWT.roles);
    //his.roles=objJWT.roles;
  }

  isAdmin() {
    return localStorage.getItem("Role").indexOf("ADMIN") >= 0;
    //return this.roles.indexOf('ADMIN')>=0
  }

  isAuthenticated() {
    // return this.roles && this.isAdmin() || this.isUser();
    return this.roles === undefined;
  }

  loadToken() {
    this.jwt = localStorage.getItem("token");
    this.username = localStorage.getItem("username");
    this.parseJWT();
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    this.initCredentials();
  }

  initCredentials() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }
}
