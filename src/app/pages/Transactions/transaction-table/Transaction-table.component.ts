import { Component } from "@angular/core";
import { LocalDataSource, ServerDataSource } from "ng2-smart-table";
import { NgxSpinnerService } from "ngx-spinner";
import { SmartTableData } from "../../../@core/data/smart-table";
import { NbDialogService } from "@nebular/theme";
import { TransactionsService } from "../../../services/transactions.service";
import { ShowdetailsComponent } from "../showDetails/show-details.component";

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./Transaction-table.html",
  styleUrls: ["./Transaction-table.scss"],
})
export class TransactionsTableComponent {
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      class: "action-column eyeClass",
      custom: [
        {
          title: '<i class="fa fa-fw fa-eye custom-eye"></i>',
          name: "View Details",
        },
      ],
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: "ID",
        type: "number",
      },
      ReferenceID: {
        title: "ReferenceID",
        type: "string",
      },
      ExternalReferenceID: {
        title: "ExternalReferenceID",
        type: "string",
      },
      SenderMsisdn: {
        title: "SenderMsisdn",
        type: "string",
      },
      ReferenceMsisdn: {
        title: "ReferenceMsisdn",
        type: "string",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: SmartTableData,
    private _dialogService: NbDialogService,
    private _spinner: NgxSpinnerService,
    private _transactionService: TransactionsService
  ) {
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit() {
    this.getTransactionsData();
  }

  getTransactionsData() {
    this._transactionService.getData().subscribe(
      (transactions) => {
        console.log("Transactiosn----->getTransactionsData", transactions);
      },
      (err) => {
        console.log("error--------->getTransactionsData", err);
      }
    );
  }

  getTransactionsById(id: number) {
    this._transactionService.findById(id).subscribe(
      (transaction) => {
        console.log("getTransactionsById+++++++++++++transaction", transaction);
      },
      (err) => {
        console.log("getTransactionsById+++++++++err", err);
      }
    );
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCustomAction(event): void {
    try {
      console.log("Cma here in agharv");
      this._spinner.show();
      setTimeout(() => {
        this._spinner.hide();
      }, 500);
      this._dialogService.open(ShowdetailsComponent, {
        context: {
          data: { atharv: "Amam" },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
