import { NgModule } from "@angular/core";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbAccordionModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbButtonModule,
  NbListModule,
  NbCheckboxModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";
import { RolesRoutingModule, routedComponents } from "./roles-routing.module";
import { CreateRolesComponent } from "./roleCreations/roles.create.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    RolesRoutingModule,
    Ng2SmartTableModule,
    NbAccordionModule,
    FormsModule,
    NbCheckboxModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
  ],
  declarations: [...routedComponents, CreateRolesComponent],
})
export class RolesModule {}
