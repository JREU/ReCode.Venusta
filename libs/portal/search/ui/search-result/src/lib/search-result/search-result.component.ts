import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResult } from "@venusta/portal/shared/models";
import { RouterLink } from "@angular/router";
import { MatListItem, MatListItemIcon, MatListItemLine, MatListItemTitle } from "@angular/material/list";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'venusta-search-result',
  standalone: true,
  imports: [CommonModule, RouterLink, MatListItem, MatIcon, MatListItemTitle, MatListItemLine, MatListItemIcon],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss',
})
export class SearchResultComponent {
  @Input({required: true})
  searchResult!: SearchResult;
}
