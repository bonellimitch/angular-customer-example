import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  @Input()
  customer!: Customer;

  constructor() { }

  ngOnInit(): void {
  }

}
