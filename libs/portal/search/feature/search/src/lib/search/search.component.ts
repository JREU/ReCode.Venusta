import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { Store } from "@ngrx/store";
import { DataAccessModule, searchPageActions, SearchState } from "@venusta/portal/search/data-access";
import { SearchApiModule } from "@venusta/portal/search/api";

@Component({
  selector: 'venusta-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatIconModule, SearchApiModule, DataAccessModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  private readonly store = inject(Store<SearchState>);

  protected searchForm = new FormGroup({
    search: new FormControl<string | null>(null)
  });

  onSubmit(): void {
    const searchQuery = this.searchForm.value.search ?? null;

    if(!searchQuery){
      return;
    }

    this.store.dispatch(searchPageActions.search({ query: searchQuery }));
  }
}
