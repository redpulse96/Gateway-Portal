import { Component } from "@angular/core";

@Component({
  selector: "ngx-authentication-elements",
  template: ` <router-outlet></router-outlet> `,
})
export class AuthenticationComponent {
  constructor() {
    console.log("Here ");
  }
}
