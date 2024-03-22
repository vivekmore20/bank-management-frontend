import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { AccountDataService } from '../../services/account-data.service';
import { Response } from '../../interfaces/response';
import { IAccount } from '../../interfaces/iaccount';
import { error } from 'console';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-view-accounts',
  templateUrl: './view-accounts.component.html',
  styleUrl: './view-accounts.component.scss',
})
export class ViewAccountsComponent implements OnInit {
  constructor(
    private http: AccountDataService,
    private router: Router,
    private toastr: ToastrService
  ) {}



  accounts: IAccount[] = [];
  ngOnInit(): void {
    this.getAllAccounts();
  }

  getAllAccounts() {
    this.http.getAllAccounts().subscribe((data: Response<IAccount[]>) => {
      this.accounts = data.data;
    });
  }

  deleteAccount(accountNo: number) {
    if (confirm(`Are you sure to delete account ${accountNo}?`)) {
    this.http.deleteAccount(accountNo).subscribe(
      (response) => {
        if(response.success){
          this.accounts = this.accounts.filter((x) => x.accountNo !== accountNo);
          this.toastr.success(response.message)
        }else{
          this.toastr.info(response.message)
        }
      },
      (error) => {
        this.toastr.error(error)
      }
    );
    }
  }

  statusChange(accountNo: number): void {
    this.http.accountStatusChange(accountNo).subscribe(
      (response) => {
        if(response.success){
          const index = this.accounts.findIndex(
            (account) => account.accountNo === accountNo
          );
          if (index !== -1) {
            this.accounts[index].status = !this.accounts[index].status;
          }
          this.toastr.success(response.message)
        }else{
          this.toastr.error(response.message)
        }
      },
      (error) => {
         this.toastr.error("Something went wrong","Error")
      }
    );
  }



  addAccount(accountNo:number){
    console.log(accountNo)
    this.router.navigate([`transaction/add-transaction/${accountNo}` ]);
  }
}
