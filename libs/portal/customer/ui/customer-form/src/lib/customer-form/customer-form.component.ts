import { CommonModule } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DateDirective } from '@venusta/directives';
import { Customer } from '@venusta/portal/customer/models';
import { ButtonComponent, InputComponent } from '@venusta/shared/ui';

@Component({
  selector: 'venusta-customer-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    DateDirective,
  ],
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  customer = input<Customer | null>(null);

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
      ...this.customer(),
    });
  }
}
