import { Component, ViewChild } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from "@angular/forms";

@Component({
  selector: "ngx-accordion",
  templateUrl: "roles.create.component.html",
  styleUrls: ["roles.create.component.scss"],
})
export class CreateRolesComponent {
  @ViewChild("item", { static: true }) accordion;
  firstForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.firstForm = this.fb.group({
      roleName: new FormControl("", [Validators.required]),
      roleSupervisor: new FormControl("", [Validators.required]),
    });
  }

  onFirstSubmit() {}
}
