import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
// import { OrderService } from '../services/order.service'; // replace with your actual service

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  orderForm = new FormGroup({
    pickupAddress: new FormControl(''),
    pickupDate: new FormControl(''),
  });

  constructor(private booksService: BooksService) { } // replace with your actual service

  ngOnInit() {
    // populate the form with the current values
    // const order = this.booksService.getCurrentOrder(); 
    // this.orderForm.setValue({
    //   pickupAddress: order.pickupAddress,
    //   pickupDate: order.pickupDate,
    // });
  }

  onSubmit() {
    // update the order with the new values
    // this.booksService.updateOrder(this.orderForm.value); 
  }
}
