import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableData } from "../../../@core/data/smart-table";

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./user.listing.html",
  styleUrls: ["./user.listing.scss"],
})
export class UserTableComponent {
  settings = {
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
      username: {
        title: "Username",
        type: "string",
      },
      email: {
        title: "E-mail",
        type: "string",
      },
      roleName: {
        title: "Role Name",
        type: "string",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
