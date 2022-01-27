import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface Customer {
  image: string;
  name: string;
  lastname: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers: Customer[] = [];

  constructor() { 
    this.customers.push({
      image: "",
      name: "Luca",
      lastname: "Rossi",
    });

    this.customers.push({
      image: "",
      name: "Michele",
      lastname: "Verdi",
    });

    this.customers.push({
      image: "",
      name: "Franco",
      lastname: "Bianchi",
    });
  }

  getCustomers(): Observable<Customer[]> {
    return of(this.customers);
  }
}
