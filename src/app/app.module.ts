import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './components/Books/book-list/book-list.component';
import { BookDetailComponent } from './components/Books/book-detail/book-detail.component';
import { BookCatagoryComponent } from './components/Books/book-catagory/book-catagory.component';
import { BooksCatagoryComponent } from './components/Books/books-catagory/books-catagory.component';
import { OrderComponent } from './components/orders/order/order.component';
import { OrderConformationComponent } from './components/orders/order-conformation/order-conformation.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { EditOrderComponent } from './components/orders/edit-order/edit-order.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditOrderDialogComponent } from './components/orders/edit-order-dialog/edit-order-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent,
    BookListComponent,
    BookDetailComponent,
    BookCatagoryComponent,
    BooksCatagoryComponent,
    OrderComponent,
    OrderConformationComponent,
    OrderListComponent,
    EditOrderComponent,
    EditOrderDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
