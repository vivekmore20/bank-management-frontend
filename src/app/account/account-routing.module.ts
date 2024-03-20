import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAccountComponent } from './home-account/home-account.component';
import { ViewAccountsComponent } from './view-accounts/view-accounts.component';
import { GetInterestComponent } from './get-interest/get-interest.component';
import { AddAccountComponent } from './add-account/add-account.component';


const routes: Routes = [

  {path:'',component:HomeAccountComponent,
  children:[
    {path:'view-accounts',component:ViewAccountsComponent},
    {path:'get-interest',component:GetInterestComponent},
    {path:'add-account',component:AddAccountComponent}
  ]


}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
