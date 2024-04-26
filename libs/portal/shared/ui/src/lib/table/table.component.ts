import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '[venusta-table]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {}
