import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  bookId: Number[] = [];
  pickUpAddress: any;
  pickUpDate: any;
  paymentMethod: any;

  constructor(
    private router: ActivatedRoute,
    private bookService: BooksService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.bookId.push(Number(this.router.snapshot.paramMap.get('id')));
    console.log("this.bookId");
    console.log(this.bookId);

  }
  
  confirmOrder() {
    this.bookService.createOrder(this.pickUpAddress, this.pickUpDate, this.paymentMethod, this.bookId).subscribe(data => {
      this.route.navigate(['conformation', data.id]);
    });
  }

  onSelected(value: string): void {
    this.pickUpAddress = value;
  }

  dateOnChange(value: string): void {
    this.pickUpDate = value;
  }
  paymentMethodOnChange(value: string): void {
    this.paymentMethod = value;
  }

}
