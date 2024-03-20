import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountDataService } from '../../services/account-data.service';
import e from 'express';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-interest',
  templateUrl: './get-interest.component.html',
  styleUrl: './get-interest.component.scss',
})
export class GetInterestComponent {
  searchForm!: FormGroup;
  accountDetails!: string;
  showContainer: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountDataService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      accountType: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      this.showContainer = true;
      const accountType = this.searchForm.value.accountType;
      this.accountService.getInterest(accountType).subscribe(
        (response) => {
          this.accountDetails = response;
          this.toastr.success('Interest Details',"Sucess");
        },
        (error) => {
          this.toastr.error('Something went wrong',"Error");
        }
      );
    } else {
      console.log('Form is invalid!');
      this.toastr.warning('fill all details');
    }
  }
}
