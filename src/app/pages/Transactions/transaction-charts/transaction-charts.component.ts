import { Component, ViewChild } from "@angular/core";
import { NbDateService } from "@nebular/theme";
import { TransactionsService } from '../../../services/transactions.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../../../services/data.share.services';
@Component({
  selector: "ngx-chartjs",
  styleUrls: ["./transaction-charts.component.scss"],
  templateUrl: "./transaction-charts.component.html",
})
export class TransactionsChartComponent {
  min: Date;
  max: Date;
  selectedDate:any
  constructor(
    protected dateService: NbDateService<Date>, 
    protected _transactionService: TransactionsService,
    protected _spinner: NgxSpinnerService,
    protected _dataShare: DataService
    ) {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }

  onSubmitTransHistory(dates: any) {
    console.log("Dates-------", dates);
    console.log("FINAL");
    console.log("MIN",this.min, "MAX",this.max, "SELECTED", this.selectedDate)
    this._dataShare.changeMessage({date:this.selectedDate})
    this._spinner.show()
    this._transactionService.getData().subscribe((transactions:any) =>{
      console.log("transactions======",transactions)
      setTimeout(() => {
        this._spinner.hide()        
      }, 500);
    }),(err)=>{
      console.log("_______Err",err)
    }
  }
}
