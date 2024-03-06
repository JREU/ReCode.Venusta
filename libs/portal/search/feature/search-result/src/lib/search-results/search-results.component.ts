import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from "@ngrx/store";
import { SearchState } from "@venusta/portal/search/data-access";
import { searchFeature } from "../../../../../data-access/src/lib/search.feature";
import { Observable } from "rxjs";
import { SearchResults } from "@venusta/portal/shared/models";
import { SearchResultComponent } from "@venusta/portal/search/ui/search-result";
import { MatList, MatListSubheaderCssMatStyler, MatNavList } from "@angular/material/list";

@Component({
  selector: 'venusta-search-results',
  standalone: true,
  imports: [CommonModule, SearchResultComponent, MatList, MatListSubheaderCssMatStyler, MatNavList],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  private readonly store = inject(Store<SearchState>);

  results$!: Observable<SearchResults | null>;

  ngOnInit(): void {
    this.results$ = this.store.select(searchFeature.selectResults);
  }
}
