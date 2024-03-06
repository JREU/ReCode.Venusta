import { SearchResultType } from "./search-result-type.model";

export type SearchResult = {
  title: string;
  description: string;
  url: string;
  type: SearchResultType
}
