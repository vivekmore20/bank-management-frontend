import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerDataService } from '../../services/customer-data.service';
import { IAccount } from '../../interfaces/iaccount';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-info-account',
  templateUrl: './info-account.component.html',
  styleUrl: './info-account.component.scss',
})
export class InfoAccountComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: CustomerDataService,
    private toastr:ToastrService
  ) {}

  accountInfo!: IAccount[];
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      this.getAccount(id);

    });
  }

  getAccount(customerID: number) {
    this.http.getAccountByCustomerId(customerID).subscribe(
      (response) => {
        if(response.success){
          this.accountInfo = response.data;
          this.toastr.success(response.message)
        }else{
          this.toastr.error(response.message)
        }
         
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
