import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  CustomerFilter,
  CustomerFilterForm,
} from '@venusta/portal/customer/models';
import { InputComponent } from '@venusta/shared/ui';

@Component({
  selector: 'venusta-customer-filter',
  standalone: true,
  imports: [CommonModule, InputComponent, ReactiveFormsModule],
  templateUrl: './customer-filter.component.html',
  styleUrl: './customer-filter.component.scss',
})
export class CustomerFilterComponent {
  filterChange = output<CustomerFilter>();

  customerFilterForm = new FormGroup<CustomerFilterForm>({
    query: new FormControl<string | null>(null, Validators.required),
  });

  onSubmit(): void {
    const filter = {
      ...this.customerFilterForm.value,
    } as CustomerFilter;

    this.filterChange.emit(filter);
  }
}
