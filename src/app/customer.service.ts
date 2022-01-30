import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface Customer {
  image: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers: Customer[] = [];

  constructor() { 
    this.customers.push({
      image: "https://www.rioparty.it/27382-large_default/peluche-orsacchiotto-teddy-bear-da-80-cm.jpg",
      firstName: "Luca",
      lastName: "Rossi",
    });

    this.customers.push({
      image: "https://m.media-amazon.com/images/I/71qtAiNUCpL._AC_SX425_.jpg",
      firstName: "Michele",
      lastName: "Verdi",
    });

    this.customers.push({
      image: "https://m.media-amazon.com/images/I/51cGCBxqrRL._AC_SL1000_.jpg",
      firstName: "Franco",
      lastName: "Bianchi",
    });
  }

  getCustomers(): Observable<Customer[]> {
    return of(this.customers);
  }
}
