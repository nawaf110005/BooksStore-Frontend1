import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

    readonly API_URL = 'http://localhost:5005/api';
  
    constructor(
      private http: HttpClient
    ) { }
  
    // getBooks(): Observable<Order[]> {
    //   const options = {
    //     headers: this.getAuthHeader()
    //   };
    //   return this.http.get<Order[]>(`${this.API_URL}/books`);
    // }
    
  
  
  
    // private getAuthHeader(): HttpHeaders {
    //   // Get the token from the local storage
    //   const token: string | null = localStorage.getItem('authToken');
    //   if (token === null) {
    //     throw null;
    //   }
    //   return new HttpHeaders({
    //     Authorization: `Bearer ${token}`
    //   });
    // }
  
  }
  