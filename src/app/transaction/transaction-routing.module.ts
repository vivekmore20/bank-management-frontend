
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTransactionComponent } from './home-transaction/home-transaction.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { FindTransactionComponent } from './find-transaction/find-transaction.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';


const routes: Routes = [

  {path:'',component:HomeTransactionComponent,
  children:[
   
    {path:'add-transaction',component:AddTransactionComponent},
    {path:'view-transaction',component:ViewTransactionComponent},
    {path:'find-transaction',component:FindTransactionComponent},
       
     
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
