import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  customerPageActions,
  CustomerState,
  customerFeature
} from "@venusta/portal/customer/data-access";
import { Store } from "@ngrx/store";
import { Customer } from "@venusta/portal/customer/models";
import { Observable } from "rxjs";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute, Router } from "@angular/router";
import { CustomerFormComponent } from "@venusta/customer/ui/customer-form";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'venusta-customers',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, CustomerFormComponent, MatCardModule],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  private readonly store =  inject(Store<CustomerState>);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  protected displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNumber'];

  protected customers$!: Observable<Customer[] | null>;

  ngOnInit(): void {
    this.store.dispatch(customerPageActions.loadCustomers());
    this.customers$ = this.store.select(customerFeature.selectCustomers);
  }

  protected onSelect(customerId: number): void {
    this.router.navigate([customerId], { relativeTo: this.activatedRoute });
  }

  protected onCreate(): void {
   this.router.navigate(['nieuw'], { relativeTo: this.activatedRoute });
  }
}
