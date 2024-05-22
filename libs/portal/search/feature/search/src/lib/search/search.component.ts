import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { searchPageActions } from '@venusta/portal/search/data-access';

@Component({
  selector: 'venusta-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  private readonly store = inject(Store);

  protected searchForm = new FormGroup({
    search: new FormControl<string | null>(null),
  });

  onSubmit(): void {
    const searchQuery = this.searchForm.value.search ?? null;

    if (!searchQuery) {
      return;
    }

    this.store.dispatch(searchPageActions.search({ query: searchQuery }));
  }
}
