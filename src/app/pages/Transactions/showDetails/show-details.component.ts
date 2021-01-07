import { Component, Input } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: "ngx-showdetails",
  templateUrl: "show-details.component.html",
  styleUrls: ["show-details.component.scss"],
})
export class ShowdetailsComponent {
  @Input() title: string;
  @Input() data: any;

  constructor(protected ref: NbDialogRef<ShowdetailsComponent>) {}

  customerDetails: any = null;
  paymentDetails: any = null;
  productDetails: any = null;
  orderDetails: any = {};

  ngOnInit() {}

  dismiss() {
    this.ref.close();
  }
}
