import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';

import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { HomeCustomerComponent } from './home-customer/home-customer.component';
import { FindCustomerComponent } from './find-customer/find-customer.component';
import { InfoAccountComponent } from './info-account/info-account.component';



const routes: Routes = [

  {path:'', component:HomeCustomerComponent,
  children:
  [{path:'add-customer',component:AddCustomerComponent},
  {path:'view-customer',component:ViewCustomerComponent},
  {path:'find-customer',component:FindCustomerComponent},
  {path:'accounts',component:InfoAccountComponent}
  

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
