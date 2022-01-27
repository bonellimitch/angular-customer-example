import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Customer, CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.scss']
})
export class CustomerSearchComponent implements OnInit {

  customers!: Customer[];

  filteredCustomers!: Customer[];

  filterValue!: string;

  @Output()
  selectedCustomer = new EventEmitter<Customer>();

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
      this.filteredCustomers = customers;
    })
  }

  doFilter(): void {
    if (!!this.filterValue) {
      this.filteredCustomers = this.customers
        .filter(c => c.name.toLowerCase().indexOf(this.filterValue.toLowerCase()) >= 0 || c.lastname.toLowerCase().indexOf(this.filterValue.toLowerCase()) >= 0);
    } else {
      this.filteredCustomers = this.customers;
    }
  }

  doClear(): void {
    this.filterValue = '';
    this.filteredCustomers = this.customers;
  }

  chooseCustomer(selectedCustomer: Customer): void {
    this.selectedCustomer.emit(selectedCustomer);
  }
}
