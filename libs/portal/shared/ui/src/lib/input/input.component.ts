import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '[venusta-input]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {}
