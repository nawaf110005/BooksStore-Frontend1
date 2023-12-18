import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
// import { BooksCatagoryComponent } from '/books-catagory/books-catagory.component';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { MatDialog } from '@angular/material/dialog';
import { EditOrderDialogComponent } from '../edit-order-dialog/edit-order-dialog.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: any;
  userId: any;

  constructor(
    private router: ActivatedRoute,
    private booksService: BooksService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.updateBookList();
  }

  updateBookList() {
    this.booksService.getOrdersByUser(Number(this.userId)).subscribe({
      next: (orders) => {
        this.orders = orders;
        console.log("orders");
        console.log(orders);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  deleteOrder(order: any) {
    console.log(order);
    this.booksService.deleteOrder(order.id).subscribe({
      next: (orders) => {
        console.log("orders after deletion");
        console.log(this.orders);
      },
      error: (error) => {
        console.log(error);
      }
    });
    this.orders = this.orders.filter((o: any) => o.id !== order.id);
  }
  

  // editOrder(order: any) {
  //   // Open the Edit Order dialog
  //   const dialogRef = this.dialog.open(EditOrderDialogComponent, {
  //     width: '250px',
  //     data: { ...order }
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       // Handle the updated values here
  //       console.log('Updated Pickup Date:', result.pickupDate);
  //       console.log('Updated Pickup Address:', result.pickupAddress);
  //     }
  //   });
  // }
}
