import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from "@ngrx/store";
import { SearchState } from "@venusta/portal/search/data-access";
import { searchFeature } from "../../../../../data-access/src/lib/search.feature";
import { Observable } from "rxjs";
import { SearchResults } from "@venusta/portal/shared/models";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'venusta-search-result',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  private readonly store = inject(Store<SearchState>);

  results$!: Observable<SearchResults | null>;

  ngOnInit(): void {
    this.results$ = this.store.select(searchFeature.selectResults);
  }
}
