import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionDataService } from '../../services/transaction-data.service';
import { ITransaction } from '../../interfaces/itransaction';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-find-transaction',
  templateUrl: './find-transaction.component.html',
  styleUrl: './find-transaction.component.scss',
})
export class FindTransactionComponent {
  searchForm!: FormGroup;
  transactionDetails: ITransaction[] = [];
  showContainer: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private transactionService: TransactionDataService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      accountNumber: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const accountNumber = this.searchForm.value.accountNumber;
      console.log(accountNumber);
      this.transactionService
        .getAllTransactionsByAccountNo(accountNumber)
        .subscribe(
          (response) => {
            if (response.success) {
              this.showContainer = true;
              this.transactionDetails = response.data;
              this.toastr.success(response.message);
            }else{
              this.toastr.error(response.message)
            }
          },
          (error) => {
            console.log(error)
            this.toastr.error(error.statusText);
          }
        );
    } else {
      this.toastr.info("Please fill correct details")
    }
  }
}
