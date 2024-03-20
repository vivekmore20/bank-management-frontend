import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarMainComponent } from './nav-bar-main/nav-bar-main.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './authentication/login/login.component';
import { authGuard } from './authentication/auth.guard';




const routes: Routes = [

  {
    path:'',component:HomeComponentComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'customer',
    loadChildren:()=> import('./customer/customer.module').then(x=>x.CustomerModule),
    canActivate:[authGuard]
    
  },
  {
    path:'account',
    loadChildren:()=> import('./account/account.module').then(x=>x.AccountModule),
    canActivate:[authGuard]
    
  },
  {
    path:'transaction',
    loadChildren:()=> import('./transaction/transaction.module').then(x=>x.TransactionModule),
    canActivate:[authGuard]
    
  },
  {
    path:'**',component:NotFoundComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
