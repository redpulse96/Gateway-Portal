import { Component, OnDestroy } from "@angular/core";
import { NbThemeService, NbColorHelper } from "@nebular/theme";
import { DataService } from '../../../services/data.share.services';

@Component({
  selector: "transactions-bar",
  template: ` <chart type="bar" [data]="data" [options]="options"></chart> `,
})
export class TransactionsChartjsBarComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private _datShare: DataService) {
    this._datShare.currentMessage.subscribe((messages:any)=>{
      console.log("I am haing subscribed messaged", messages)
    })
    this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: [
          "Tigo",
          "Airtel",
          "Vodacom",
          "Halopesa",
          "EzyPesa",
          "NMB",
          "CRDB",
        ],
        datasets: [
          {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: "Yesterday",
            backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
          },
          {
            data: [28, 48, 40, 19, 86, 27, 90],
            label: "Today",
            backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
          },
        ],
      };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
