import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { UserService } from '../../../services/user.services';

@Component({
  selector: "ngx-registration-input",
  styleUrls: ["./registration.component.scss"],
  templateUrl: "./registration.component.html",
})
export class RegistrationComponent {
  // userForm: FormGroup;
  // contactForm: FormGroup;
  // businessForm: FormGroup;
  constructor(private fb: FormBuilder, private service: UserService) { }
  postData;
  vendorTypes = [{ VendorType: "Normal", VendorTypeID: 1 }, { VendorType: "Super", VendorTypeID: 2 }]
  /** User Form */
  userForm: FormGroup = new FormGroup({
    UserID: new FormControl("", [Validators.required]),
    Username: new FormControl("", [Validators.required]),
    NewPassword: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
    ConfirmPassword: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
  }, { validators: this.password.bind(this) }
  );
  selectedItem = "1";

  /** Contact Form */
  contactForm: FormGroup = new FormGroup({
    Email: new FormControl("", [Validators.required, Validators.email]),
    MobileNumber: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]{1,45}$"),
    ]),
    Country: new FormControl("TZA", [Validators.required]),
    Address: new FormControl("", [Validators.required]),
  });


  /** Business Form */
  businessForm: FormGroup = new FormGroup({
    PaymentVendorName: new FormControl("", [Validators.required]),
    PaymentVendorDescription: new FormControl("", [Validators.required]),
    BusinessTIN: new FormControl("", [Validators.required]),
    AverageCustomer: new FormControl("", [Validators.required]),
    TaxCertificateURL: new FormControl("", [Validators.required]),
    VendorIntimationRoute: new FormControl("", [Validators.required]),
    VendorProcessingRoute: new FormControl("", [Validators.required]),
    VendorTypeID: new FormControl("", [Validators.required])

  });

  password(formGroup: FormGroup) {
    const { value: NewPassword } = formGroup.get('NewPassword');
    const { value: ConfirmPassword } = formGroup.get('ConfirmPassword');
    return (NewPassword != "" && ConfirmPassword != "") && NewPassword !== ConfirmPassword ? { passwordNotMatch: true } : null;
  }



  ngOnInit() {
    this.userForm.patchValue({ UserID: 21 });
    this.getVendorTypes();
  }



  onUserSubmit() {
    if (this.userForm.valid) {
      this.postData = { ...this.userForm.value };
      console.log('userForm  Valid=', this.userForm.value)
    } else {
      console.log('userForm Not Valid=', this.userForm.value)
      this.userForm.markAsDirty();
    };

  }

  onContactSubmit() {

    if (this.contactForm.valid) {
      this.postData = { ...this.contactForm.value, ...this.postData };
      console.log('Contact Form Valid=', this.contactForm.value)
    } else {
      console.log('Contact Form Not Valid=', this.contactForm.value)
      this.contactForm.markAsDirty();
    }
  }

  onBusinessSubmit() {
    if (this.businessForm.valid) {
      this.postData = { ...this.businessForm.value, ...this.postData };
      this.submitForm(this.postData);
      console.log('businessForm Valid=', this.businessForm.value)
    } else {
      console.log('businessForm Not Valid=', this.businessForm.value)
      this.businessForm.markAsDirty();
    }
  }

  submitForm(data: any) {
    console.log('Form Submission=', data)
    const formData = {
      UserDetails: {
        NewPassword: data.NewPassword,
        UserID: data.UserID,
        Country: data.Country,
        MobileNumber: data.MobileNumber,
      },
      PaymentVendorDetails: {
        PaymentVendorName: data.PaymentVendorName,
        PaymentVendorDescription: data.PaymentVendorDescription,
        Username: data.Username,
        BusinessTIN: data.BusinessTIN,
        AverageCustomer: data.AverageCustomer,
        TaxCertificateURL: data.TaxCertificateURL,
        VendorIntimationRoute: data.VendorIntimationRoute,
        VendorProcessingRoute: data.VendorProcessingRoute,
        VendorTypeID: data.VendorTypeID,
      }
    };

    this.service.saveUserDetails(formData).subscribe(
      (response: any) => {
        console.log('In Get vendor Api Response=', response)
        this.vendorTypes = response.data.vendorTypes;
        if (response.status === true) {
          this.vendorTypes = response.data;
        }
      },
      error => { console.error('Error in Submit Form Data=', error); }
    );
  }

  getVendorTypes() {
    this.service.getVendorTypes().subscribe(
      (response: any) => {
        console.log('In Get vendor Api Response=', response)
        this.vendorTypes = response.data.vendorTypes;
        if (response.status === true) {
          this.vendorTypes = response.data;
        }
      },
      error => { console.error('Error in get Data=', error); }
    );
  }

  _mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
