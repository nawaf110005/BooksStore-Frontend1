import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-catagory',
  templateUrl: './book-catagory.component.html',
  styleUrls: ['./book-catagory.component.css']
})
export class BookCatagoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("book catagory component loaded...")
  }

}
