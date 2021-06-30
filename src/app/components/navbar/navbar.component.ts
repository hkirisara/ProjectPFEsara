import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../service/authentication.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private auth: AuthenticationService) {}

  ngOnInit() {}

  logout() {
    localStorage.setItem("isLogedIn", "0");
    this.auth.logout();
    this.router.navigateByUrl("/");
    setTimeout(() => {
      location.reload();
    }, 100);
  }
}
