import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AadharGroupPipe } from './aadhar-group.pipe';
import { CustomeCurrencyPipe } from './custome-currency.pipe';
import { StatuscolorPipe } from './statuscolor.pipe';
import { DepositWithdrawColorPipe } from './deposit-withdraw-color.pipe';




@NgModule({
  declarations: [AadharGroupPipe,
    CustomeCurrencyPipe,
  StatuscolorPipe,
  DepositWithdrawColorPipe],
    imports: [
    CommonModule
  ],
  exports:[
    AadharGroupPipe,
    CustomeCurrencyPipe,
    StatuscolorPipe,
    DepositWithdrawColorPipe

  ]
})
export class PipesModule { }
