import { Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './../_services/auth.guard';
export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'full'
    
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'signUp',
    component:SignUpComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'payment',
    component:PaymentComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'super',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
  }

];


