import { Component } from '@angular/core';
import { Customer } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-customer-example';

  selectedCustomer!: Customer | null;

  constructor() {}

  onSelectedCustomer(customer: Customer): void {
    this.selectedCustomer = customer;
  }
}
