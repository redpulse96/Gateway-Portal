import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthenticationComponent } from "./authentication.component";
import { RegistrationComponent } from "./registration/registration.component";
import { UserTableComponent } from "./userListing/user.listing";

const routes: Routes = [
  {
    path: "",
    component: AuthenticationComponent,
    children: [
      {
        path: "resgiration",
        component: RegistrationComponent,
      },
      {
        path: "listing",
        component: UserTableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {
  constructor() {
    console.log("I dont tyhin");
  }
}
