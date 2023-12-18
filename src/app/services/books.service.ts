import { Injectable } from '@angular/core';
import { Book } from '../models/books.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/order.model';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  readonly API_URL = 'http://localhost:5005/api';

  constructor(
    private http: HttpClient
  ) { }

  getBooks(): Observable<Book[]> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.get<Book[]>(`${this.API_URL}/books`);
  }
  getNewBooks(): Observable<Book[]> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.get<Book[]>(`${this.API_URL}/books/news`);
  }


  getBook(id: number): Observable<Book> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.get<Book>(`${this.API_URL}/books/${id}`, options);
  }

  createBook(book: Book): Observable<void> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.post<void>(`${this.API_URL}/books/add`, book, options);
  }

  updateBook(book: Book): Observable<Book> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.patch<Book>(`${this.API_URL}/books/update/${book.id}`, book, options);
  }

  deleteBook(id: number | null): Observable<Book> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.delete<Book>(`${this.API_URL}/books/delete/${id}`, options);
  }
  getBookcat(id: string): Observable<Book> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.get<Book>(`${this.API_URL}/books/category/${id}`, options);
  }

  createOrder(pickUpAddress: string, pickUpDate: string, paymentMethod: string, bookId: any): Observable<any> {
    const options = {
      headers: this.getAuthHeader()
    };

    
    return this.http.post(`${this.API_URL}/orders/add`, {
      pickupAddress: pickUpAddress,
      pickupDate: pickUpDate,
      paymentMethod: paymentMethod,
      userId: localStorage.getItem('userId'),
      bookId: bookId
    }, options);
  }

  getOrdersByUser(id: number): Observable<Order[]> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.get<Order[]>(`${this.API_URL}/ordersById/${id}`);
  }
  deleteOrder(id: any) {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.delete<Order[]>(`${this.API_URL}/orders/delete/${id}`);
  }
  getOrderById(id: any) {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.get<Order[]>(`${this.API_URL}/orders/${id}`);
  }
// getCurrentOrder(): Order {
//     return this.orders[this.orders.length - 1];
//   }
updateOrder(order: Order): Observable<Order> {
  const options = {
    headers: this.getAuthHeader()
  };
  return this.http.patch<Order>(`${this.API_URL}/orders/update/${order.id}`, order);
}


  private getAuthHeader(): HttpHeaders {
    // Get the token from the local storage
    const token: string | null = localStorage.getItem('authToken');
    if (token === null) {
      throw null;
    }
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

}
