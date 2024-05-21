import { FormControl } from '@angular/forms';

export type CustomerFilterForm = {
  query: FormControl<string | null>;
};
