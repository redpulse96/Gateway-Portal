import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RoleComponent } from "./roles.component";
import { RolesTableComponent } from "./smart-table/roles.component";
import { CreateRolesComponent } from "./roleCreations/roles.create.component";

const routes: Routes = [
  {
    path: "",
    component: RoleComponent,
    children: [
      {
        path: "roles-listing",
        component: RolesTableComponent,
      },
      {
        path: "create-roles",
        component: CreateRolesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolesRoutingModule {}

export const routedComponents = [RoleComponent, RolesTableComponent];
