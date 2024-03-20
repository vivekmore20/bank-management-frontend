import { CustomerDataService } from './../../services/customer-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputAccount } from '../../interfaces/input-account';
import { AccountDataService } from '../../services/account-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.scss',
})
export class AddAccountComponent implements OnInit {
  searchForm!: FormGroup;
  accountForm!: FormGroup;
  accountDetails!: InputAccount;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private customerService: CustomerDataService,
    private accountService: AccountDataService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      customerId: ['', Validators.required],
    });
    this.accountForm = this.formBuilder.group({
      accountType: ['', Validators.required],
      balance: ['', [Validators.required, Validators.pattern(/^\d*\.?\d*$/)]],
    });
  }
  isActive = false;
  customerId!: number;
  onSubmitSearchForm() {
    if (this.searchForm.valid) {
      this.customerId = this.searchForm.value.customerId;
      this.customerService
        .getcustomerDetailsByCustomerId(this.customerId)
        .subscribe(
          (response) => {
            if (response.success) {
              this.isActive = true;
              
              this.toastr.info("Fill Details")
              this.toastr.success("Customer Found")
            } else {
              this.toastr.error('Customer Not Found', 'error');
            }
          },
          (error) => {
            this.toastr.error('Customer Not Found', 'error');
          }
        );
    }
  }

  onSubmitAcountForm() {
    if (this.accountForm.valid && this.isActive) {
      this.accountDetails = this.accountForm.value;
      this.accountDetails.customerId = this.customerId;
      this.accountDetails.status = true;
      console.log(this.accountDetails);
      this.accountService.addAccount(this.accountDetails).subscribe(
        (response) => {
          this.toastr.success('Account Created', 'success');
          console.log(response);
        },
        (error) => {
          this.toastr.error('Something went wrong','error')
        }
      );
    } else {
    }
  }
}
