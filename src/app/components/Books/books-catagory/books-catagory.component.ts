import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/books.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-catagory',
  templateUrl: './books-catagory.component.html',
  styleUrls: ['./books-catagory.component.css']
})
export class BooksCatagoryComponent implements OnInit {
   books: any;
  // selectedCategory: any;
  constructor(
    private router: ActivatedRoute,
    private getBookscat: BooksService
  ) {

   }
  catagory: any;

  ngOnInit(): void {
    this.updateBookList();
    // this.selectedCategory = this.books[0].category;
  }

  updateBookList() {  
    this.catagory = this.router.snapshot.paramMap.get('books');
    this.getBookscat.getBookcat(this.catagory).subscribe({
      next: (books) => {
        this.books = books;
        console.log(books)
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}