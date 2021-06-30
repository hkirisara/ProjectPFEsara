import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "./service/authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "test";
  token;
  isLogedIn = "0";
  login;
  password;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}
  ngOnInit() {
    if (localStorage.getItem("isLogedIn"))
      this.isLogedIn = localStorage.getItem("isLogedIn");
  }
  onLogin() {
    const data = { email: this.login, password: this.password };
    this.authenticationService.login(data).subscribe(
      (resp) => {
        console.log(resp);
        //recuperer le jwt
        console.log(resp.headers.get("Authorization"));
        let jwt = resp.headers.get("Authorization");
        this.authenticationService.saveToken(jwt);
        this.isLogedIn = "1";
        localStorage.setItem("isLogedIn", this.isLogedIn);
        // this.router.navigateByUrl("/dashboard");
        this.router.navigate(["/dashboard"]);
        setTimeout(() => {
          location.reload();
        }, 100);
      },
      (error) => {
        //console.log(error);
        this.isLogedIn = "0";
      },
      () => {}
    );
  }
}
