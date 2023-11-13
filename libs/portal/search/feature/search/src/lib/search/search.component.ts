import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'venusta-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatIconModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  protected searchForm = new FormGroup({
    search: new FormControl<string | null>(null)
  });

  onSubmit(): void {
    console.log('Searching for...', this.searchForm.value.search);
    // TODO: Redirect to search results
  }
}
