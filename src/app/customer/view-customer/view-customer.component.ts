import { Component } from '@angular/core';
import { ICustomer } from '../../interfaces/icustomer';
import { CustomerDataService } from '../../services/customer-data.service';
import { Response } from '../../interfaces/response';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.scss',
})
export class ViewCustomerComponent {
  constructor(
    private http: CustomerDataService,
    private router: Router,
    private toastr:ToastrService
) {}

  customer: ICustomer[] = [];

  ngOnInit(): void {
    this.http.getCustomers().subscribe((data: Response<ICustomer[]>) => {
      this.customer = data.data;
     
    });
  }

  deleteCustomer(aadharNumber: string) {
    
    this.http.deleteCustomer(aadharNumber).subscribe(
      (data: string) => {
        if (data.match('success')) {
          this.customer = this.customer.filter(
            (x) => x.aadharNumber !== aadharNumber
          );
          this.toastr.warning("Customer Deleted")
        } else {
          this.toastr.error("Something went wrong")
        }
      },
      (error) => {
        console.log(error);
      }
    );
    
  }

  showCustomer(customerId: number) {
    console.log(customerId);
    this.router.navigate(['customer/add-customer'], {
      queryParams: { customerId: customerId },
    });
  }

  detailsNavigate(id: number) {
    this.router.navigate(['customer/accounts'], { queryParams: { id: id } });
  }

 
}
