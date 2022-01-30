import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  @Input()
  customer!: Customer;

  firstNameControl!: FormControl;
  lastNameControl!: FormControl;

  editForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.editForm = new FormGroup({});
    this.firstNameControl = new FormControl('', Validators.required);
    this.lastNameControl = new FormControl('', Validators.required);
    this.editForm.setControl('firstName', this.firstNameControl);
    this.editForm.setControl('lastName', this.lastNameControl);
  }

}
