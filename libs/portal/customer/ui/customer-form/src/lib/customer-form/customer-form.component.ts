import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { Customer } from '@venusta/portal/customer/models';
import { ButtonComponent, InputComponent } from '@venusta/shared/ui';

@Component({
  selector: 'venusta-customer-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  @Input()
  customer!: Customer;

  submitted = output<Customer>();
  cancelled = output<void>();

  customerForm = new FormGroup({
    firstName: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    lastName: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    email: new FormControl<string | null>(null, {
      validators: [Validators.email],
    }),
    phoneNumber: new FormControl<string | null>(null),
    dateOfBirth: new FormControl<Date | null>(null),
  });

  protected onSubmit(): void {
    const updatedCustomer = {
      ...this.customerForm.value,
    } as Customer;

    this.submitted.emit(updatedCustomer);
  }

  protected onCancel(): void {
    this.cancelled.emit();
  }

  ngOnInit(): void {
    this.customerForm.patchValue({
      ...this.customer,
    });
  }
}
