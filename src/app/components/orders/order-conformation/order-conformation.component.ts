import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-conformation',
  templateUrl: './order-conformation.component.html',
  styleUrls: ['./order-conformation.component.css']
})
export class OrderConformationComponent implements OnInit {
  orderId: any;
  constructor(
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.orderId = this.router.snapshot.paramMap.get('id');
  }

}
