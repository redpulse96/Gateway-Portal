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
  NbCardBackComponent,
  NbCardHeaderComponent,
  NbDatepickerModule,
  NbActionsModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgxSpinnerModule } from "ngx-spinner";

import { ThemeModule } from "../../@theme/theme.module";
import {
  TransactionRoutingModule,
  routedComponents,
} from "./Transaction-routing.module";
import { TransactionsTableComponent } from "./transaction-table/Transaction-table.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TransactionsChartComponent } from "./transaction-charts/transaction-charts.component";
import { NgxEchartsModule } from "ngx-echarts";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartModule } from "angular2-chartjs";
import { TransactionsChartjsBarComponent } from "./transaction-charts/charts.bar";
import { TransactionsEchartsPieComponent } from "./transaction-charts/charts.pie";
import { ShowdetailsComponent } from "./showDetails/show-details.component";

@NgModule({
  imports: [
    ThemeModule,
    NbDatepickerModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NgxSpinnerModule,
    TransactionRoutingModule,
    Ng2SmartTableModule,
    NbAccordionModule,
    FormsModule,
    NbCheckboxModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbButtonModule,
    NbListModule,
    NbIconModule,
    NbActionsModule,

    ThemeModule,
  ],
  declarations: [
    ...routedComponents,
    TransactionsTableComponent,
    TransactionsChartjsBarComponent,
    ShowdetailsComponent,
    TransactionsEchartsPieComponent,
  ],
  entryComponents: [ShowdetailsComponent],
})
export class TransactionsModule {}
