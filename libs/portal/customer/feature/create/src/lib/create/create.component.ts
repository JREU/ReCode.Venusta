import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CustomerFormComponent } from '@venusta/customer/ui/customer-form';
import { customerPageActions } from '@venusta/portal/customer/data-access';
import { Customer } from '@venusta/portal/customer/models';
import { CardComponent } from '@venusta/shared/ui';

@Component({
  selector: 'venusta-create-customer',
  standalone: true,
  imports: [CommonModule, CustomerFormComponent, CardComponent],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateCustomerComponent {
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  onSubmit(customer: Omit<Customer, 'id'>): void {
    this.store.dispatch(customerPageActions.createCustomer({ customer }));
  }

  onCancel(): void {
    this.router.navigate(['klanten']);
  }
}
