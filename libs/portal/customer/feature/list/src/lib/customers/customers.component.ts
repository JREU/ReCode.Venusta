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
import {
  ButtonComponent,
  CardComponent,
  TableComponent,
} from '@venusta/shared/ui';
import { Observable } from 'rxjs';

@Component({
  selector: 'venusta-customers',
  standalone: true,
  imports: [
    CommonModule,
    CustomerFormComponent,
    ButtonComponent,
    CardComponent,
    TableComponent,
  ],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  private readonly store = inject(Store<CustomerState>);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  protected customers$!: Observable<Customer[] | null>;

  protected selectedCustomer!: Customer;

  ngOnInit(): void {
    this.store.dispatch(customerPageActions.loadCustomers());
    this.customers$ = this.store.select(customerFeature.selectCustomers);
  }

  protected onEdit(customerId: number): void {
    this.router.navigate([customerId], { relativeTo: this.activatedRoute });
  }

  protected onCreate(): void {
    this.router.navigate(['nieuw'], { relativeTo: this.activatedRoute });
  }
}
