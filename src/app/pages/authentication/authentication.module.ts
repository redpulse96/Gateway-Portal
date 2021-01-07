import { NgModule } from "@angular/core";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbTabsetModule,
  NbProgressBarModule,
  NbSpinnerModule,
  NbStepperModule,
} from "@nebular/theme";
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from "../../@theme/theme.module";
import { AuthenticationRoutingModule } from "./authentication-routes.module";
import { AuthenticationComponent } from "./authentication.component";
import { RegistrationComponent } from "./registration/registration.component";
import {
  FormsModule as ngFormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { UserTableComponent } from "./userListing/user.listing";
import { Ng2SmartTableModule } from "ng2-smart-table";

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NgSelectModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    AuthenticationRoutingModule,
    NbSelectModule,
    NbTabsetModule,
    NbStepperModule,
    NbIconModule,
    ngFormsModule,
    ReactiveFormsModule,
    NbProgressBarModule,
    NbSpinnerModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    AuthenticationComponent,
    RegistrationComponent,
    UserTableComponent,
  ],
})
export class AuthenticationModule {
  constructor() {
    console.log("Here i came");
  }
}
