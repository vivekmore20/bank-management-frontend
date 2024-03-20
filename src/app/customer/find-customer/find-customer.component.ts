import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerDataService } from '../../services/customer-data.service';
import { ICustomerShow } from '../../interfaces/icustomer-show';
import { IAccount } from '../../interfaces/iaccount';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-find-customer',
  templateUrl: './find-customer.component.html',
  styleUrl: './find-customer.component.scss',
})
export class FindCustomerComponent {
  searchForm: FormGroup;
  customerDetails!: ICustomerShow;
  accountInfo!: IAccount[];
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerDataService,
    
    private toastr:ToastrService
  ) {
    this.searchForm = this.formBuilder.group({
      aadharNumber: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.searchForm.valid) {
      const aadharNumber = this.searchForm.value.aadharNumber;
      console.log(aadharNumber);
      this.customerService
        .getCustomerByAadhar(aadharNumber)
        .subscribe((response:any) => {
          this.customerDetails = response.data;
          this.toastr.success("Customer Details","Success")
          this.getAccount(this.customerDetails.customerId);
        },
        (error)=>{
          this.toastr.error("Something went wrong","Error")
        }
        );
    } else {
     
      this.toastr.error("Something went wrong","Error")
    }
  }

  getAccount(customerID: number) {
    this.customerService.getAccountByCustomerId(customerID).subscribe(
      (response) => {
        if(response.success){
          this.accountInfo = response.data;
          this.toastr.success("Account Details","Success")
        }else{
          this.toastr.error(response.message)
        }    
      },
      (error) => {
        this.toastr.error("Something went wrong")
      }
    );
  }
}
