import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuardService } from './services/auth-guard.service';
import { BookListComponent } from './components/Books/book-list/book-list.component';
import { BookDetailComponent } from './components/Books/book-detail/book-detail.component';
import { BookCatagoryComponent } from './components/Books/book-catagory/book-catagory.component';
import { BooksCatagoryComponent } from './components/Books/books-catagory/books-catagory.component';
import { OrderComponent } from './components/orders/order/order.component';
import { OrderConformationComponent } from './components/orders/order-conformation/order-conformation.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/:_id',
    component: BookDetailComponent
  },
  {
    path: 'catagory/:books',
    component: BooksCatagoryComponent
  },
  {
    path: 'catagory',
    component: BookCatagoryComponent
  },
  {
    path: 'order/:id',
    component: OrderComponent
  },
  {
    path: 'conformation/:id',
    component: OrderConformationComponent
  },
  {
    path: 'orders',
    component: OrderListComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
