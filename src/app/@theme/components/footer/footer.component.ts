import { Component } from "@angular/core";

@Component({
  selector: "ngx-footer",
  styleUrls: ["./footer.component.scss"],
  template: `
    <span class="created-by">
      Created with ♥ by
      <b><a href="https://www.azampay.com/" target="_blank">Azam Pay</a></b>
      2019
    </span>
    <div class="socials">
      <a
        href="https://www.azampay.com/"
        target="_blank"
        class="ion ion-social-github"
      ></a>
      <a
        href="https://www.azampay.com/"
        target="_blank"
        class="ion ion-social-facebook"
      ></a>
      <a
        href="https://www.azampay.com/"
        target="_blank"
        class="ion ion-social-twitter"
      ></a>
      <a
        href="https://www.azampay.com/"
        target="_blank"
        class="ion ion-social-linkedin"
      ></a>
    </div>
  `,
})
export class FooterComponent {}
