import { ToastrService } from 'ngx-toastr';
import { TransactionDataService } from '../../services/transaction-data.service';
import { ITransaction } from './../../interfaces/itransaction';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrl: './view-transaction.component.scss',
})
export class ViewTransactionComponent implements OnInit {
  transaction: ITransaction[] = [];

  constructor(private transactionService: TransactionDataService,private toastr:ToastrService) {}

  ngOnInit(): void {
    this.getAllTransactions()
  }

  getAllTransactions(){
    this.transactionService.getAllTransactions().subscribe(
      (response) => { 
        if(response.success){
          this.transaction = response.data;
          this.toastr.success(response.message)
        }else{
          this.toastr.error(response.message)
        }
      },
      (error) => {
        console.log(error)
        this.toastr.error("Something went wrong")
      }
    );
  }
}
