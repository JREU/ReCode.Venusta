import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Customer } from "@venusta/portal/customer/models";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

@Component({
  selector: 'venusta-customer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  @Input()
  customer!: Customer;

  @Output()
  submitted: EventEmitter<Customer> =  new EventEmitter<Customer>();

  customerForm = new FormGroup({
    firstName: new FormControl<string | null>(null, { validators: [Validators.required]}),
    lastName: new FormControl<string | null>(null, { validators: [Validators.required]}),
    email: new FormControl<string | null>(null, { validators: [Validators.email]}),
    phoneNumber: new FormControl<string | null>(null),
    dateOfBirth: new FormControl<Date | null>(null)
  });

  protected onSubmit(): void {
    const updatedCustomer = {
      ...this.customerForm.value
    } as Customer;

    this.submitted.emit(updatedCustomer);
  }

  ngOnInit(): void {
    this.customerForm.patchValue({
      ...this.customer
    });
  }
}
