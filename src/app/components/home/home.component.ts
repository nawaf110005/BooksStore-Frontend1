import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string;
  currentUser: any;

  constructor() { 
    this.name = 'John Doe';
  }

 ngOnInit(): void {
    // Retrieve the currentUser from localStorage
    const storedCurrentUser = localStorage.getItem('currentUser');

    if (storedCurrentUser) {
      // Remove surrounding double quotes if they exist
      this.currentUser = storedCurrentUser.replace(/^"(.*)"$/, '$1');
    }
  }
}