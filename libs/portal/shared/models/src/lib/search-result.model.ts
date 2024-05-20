import { TemplateRef } from '@angular/core';
import { SearchResultType } from './search-result-type.model';

export type SearchResult = {
  title: string;
  pictureUrl: string;
  subtitle?: string;
  description?: string;
  data: TemplateRef<unknown>;
  url: string;
  type: SearchResultType;
};
