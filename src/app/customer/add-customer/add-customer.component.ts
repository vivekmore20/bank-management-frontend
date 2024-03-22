import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerDataService } from '../../services/customer-data.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.scss',
})
export class AddCustomerComponent implements OnInit {
  formData: any = {};
  customerId!: number;
  isEditing: boolean = false;
  heading: string = 'Add Customer';



  constructor(
    private toastr: ToastrService,
    private customerService: CustomerDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void { 
    this.extractCustomerID()
  }


  extractCustomerID()
  {
    this.route.queryParams.subscribe((params) => {
      const customerId = params['customerId'];
      if (customerId) {
        this.isEditing = true;
        this.heading = 'Edit Customer';
        this.customerId = customerId;

        this.loadData(customerId);
      } else {
        this.isEditing = false;
        this.resetFormData();
      }
    });
  }

  loadData(customerID: number) {
    this.customerService.getcustomerDetailsByCustomerId(customerID).subscribe(
      (customer) => {
        if(customer.success){
          this.formData = customer.data;
          this.formData.dateOfBirth = formatDate(
            customer.data.dateOfBirth,
            'yyyy-MM-dd',
            'en-US'
          );
    
        }else{
          this.toastr.error(customer.message)
        }
       
      },
      (error) => {
        console.log(error.statusText);
      }
    );
  }
  
  resetFormData() {
    this.heading = 'Add Customer';
    this.formData = {};
  }
  submitForm(form: NgForm) {
    if (form.valid) {
      if (this.isEditing) {
        this.customerService
          .updateCustomerwithAccount(this.customerId, this.formData)
          .subscribe(
            (response) => {
              if(response.success){
                console.log(response);
              this.toastr.success(response.message);
             
              this.router.navigate(['customer/view-customer']);
              }else{
                this.toastr.error(response.message)
              }
              
            },
            (error) => {
              this.toastr.error('Went wrong from updating', 'Error');
            }
          );
        this.resetFormData();
      } else {
        this.customerService.addCustomerWithDetails(this.formData).subscribe(
          (response) => {
            if(response.success){
              this.toastr.success(response.message);
              this.router.navigate(['customer/view-customer']);
            }else{
              this.toastr.error(response.message)
            }
            
          },
          (error) => {
            this.toastr.error(error.error);
          }
        );
      }
    } else {
      this.toastr.warning('Please fill all deatils', 'Warning');
    }
  }
}
