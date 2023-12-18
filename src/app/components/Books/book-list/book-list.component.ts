import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/books.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(
    private getNewBooks: BooksService
  ) {
    this.books = []
  }

  ngOnInit(): void {
    this.updateBookList();
  }

  updateBookList() {  
    this.getNewBooks.getNewBooks().subscribe({
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