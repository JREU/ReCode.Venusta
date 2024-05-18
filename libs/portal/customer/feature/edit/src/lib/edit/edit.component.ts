import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CustomerFormComponent } from '@venusta/customer/ui/customer-form';
import {
  customerFeature,
  customerPageActions,
  CustomerState,
} from '@venusta/portal/customer/data-access';
import { Customer } from '@venusta/portal/customer/models';
import { filterNullAndUndefined } from '@versure/utilities';
import { Observable } from 'rxjs';

@Component({
  selector: 'venusta-edit-customer',
  standalone: true,
  imports: [CommonModule, CustomerFormComponent],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly store = inject(Store<CustomerState>);
  protected customer$!: Observable<Customer>;

  ngOnInit(): void {
    const customerId = parseInt(
      this.route.snapshot.paramMap.get('customerId') ?? '',
    );
    this.store.dispatch(customerPageActions.loadCustomer({ customerId }));
    this.customer$ = this.store
      .select(customerFeature.selectCustomer)
      .pipe(filterNullAndUndefined());
  }

  onSubmit(updatedCustomer: Partial<Customer>, customer: Customer): void {
    const model = {
      ...customer,
      ...updatedCustomer,
    } as Customer;

    this.store.dispatch(
      customerPageActions.updateCustomer({ customer: model }),
    );
  }

  onCancel(): void {
    this.router.navigate(['klanten']);
  }
}
