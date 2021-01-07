import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TransactionComponent } from "./Transaction.component";
import { TransactionsTableComponent } from "./transaction-table/Transaction-table.component";
import { TransactionsChartComponent } from "./transaction-charts/transaction-charts.component";

const routes: Routes = [
  {
    path: "",
    component: TransactionComponent,
    children: [
      {
        path: "transaction-listing",
        component: TransactionsTableComponent,
      },
      {
        path: "transaction-stats",
        component: TransactionsChartComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}

export const routedComponents = [
  TransactionComponent,
  TransactionsTableComponent,
  TransactionsChartComponent,
];
