import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/books.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;

  constructor(
    private router: ActivatedRoute,
    private bookService: BooksService
  ) {
    this.book = new Book(null, '', '', '',0,'','');
  }

  id: any;
  
    ngOnInit(): void {
    console.log(this.router);

      this.id = this.router.snapshot.paramMap.get('_id');
      console.log("book detail component");
      this.bookService.getBook(this.id).subscribe(
        {
          next: (data) => {
            console.log(data);
            console.log("data");
            this.book = data;
          }
        }
      );
      console.log(this.book);
    }

    orderBook() {

    }
  }
