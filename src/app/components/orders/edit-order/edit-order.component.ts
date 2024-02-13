import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  
  id: any;
  data: any;

  constructor(private dataService: BooksService, private router: ActivatedRoute,) {
    
   } // replace with your actual service
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {
    
  //   this.id = this.router.snapshot.paramMap.get('id');
  //   this.getData();
  // }
  // getData() {
  //   this.dataService.getData().subscribe(data => {
  //     this.data = data.find(item => item.id === this.id);
  //   });
  // }

  onSubmit() {
    // update the order with the new values
    // this.booksService.updateOrder(this.orderForm.value); 
  }
}
