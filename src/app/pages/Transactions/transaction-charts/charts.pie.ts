import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { NbThemeService } from "@nebular/theme";
import { TransactionsService } from "../../../services/transactions.service";
import { DataService } from '../../../services/data.share.services';
import { messages } from '../../extra-components/chat/messages';

@Component({
  selector: "transactions-pie",
  template: ` <div echarts [options]="options" class="echart"></div> `,
})
export class TransactionsEchartsPieComponent
  implements AfterViewInit, OnDestroy, OnInit {
  options: any = {};
  themeSubscription: any;

  constructor(
    private theme: NbThemeService,
    private _transactionService: TransactionsService,
    private _dataShare: DataService
  ) {
    this._dataShare.currentMessage.subscribe((messages:any)=>{
      console.log(">>>>>>>>",messages)
      this._transactionService.getData();
    })
  }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [
          colors.warningLight,
          colors.infoLight,
          colors.dangerLight,
          colors.successLight,
          colors.primaryLight,
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["USA", "Germany", "France", "Canada", "Russia"],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: "Countries",
            type: "pie",
            radius: "80%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "Germany" },
              { value: 310, name: "France" },
              { value: 234, name: "Canada" },
              { value: 135, name: "Russia" },
              { value: 1548, name: "USA" },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
