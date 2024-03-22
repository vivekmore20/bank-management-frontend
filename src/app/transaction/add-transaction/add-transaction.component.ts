import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionDataService } from '../../services/transaction-data.service';
import { error } from 'console';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throws } from 'assert';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.scss',
})
export class AddTransactionComponent {
  transactionForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private transactionservice: TransactionDataService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.createForm();
   ;
    var accountNo=this.route.snapshot.params['accountNo'];
    console.log(accountNo)
    if(accountNo!=undefined){
        this.loadData(accountNo)
    }
}

  loadData(accountNo: number) {
    this.transactionForm.patchValue({
      accountId: accountNo,
    });
  }

  createForm() {
    this.transactionForm = this.fb.group({
      accountId: ['', Validators.required],
      transactionType: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0),Validators.pattern(/^\d*\.?\d*$/)],],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      console.log(this.transactionForm.value);
      this.transactionservice
        .addTransaction(this.transactionForm.value)
        .subscribe(
          (response) => {
            if(response.success){
              this.toastr.success(response.message);
            }else{
              this.toastr.error(response.message)
            }
            
          },
          (error) => {
            this.toastr.error('Something went wrong',"Failure");
          }
         
        );
      this.transactionForm.reset();
    } else {
      
      this.transactionForm.markAllAsTouched();
      this.toastr.info("Please enter valid amount")
    }
  }
}
