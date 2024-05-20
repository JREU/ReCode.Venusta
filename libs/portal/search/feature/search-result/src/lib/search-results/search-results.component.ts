import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { searchFeature } from '@venusta/portal/search/data-access';
import { SearchResultComponent } from '@venusta/portal/search/ui/search-result';
import { SearchResults } from '@venusta/portal/shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'venusta-search-results',
  standalone: true,
  imports: [CommonModule, SearchResultComponent, RouterLink],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  private readonly store = inject(Store);

  results$!: Observable<SearchResults | null>;

  ngOnInit(): void {
    this.results$ = this.store.select(searchFeature.selectResults);
  }
}
