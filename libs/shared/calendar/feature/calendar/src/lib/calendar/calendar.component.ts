import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@venusta/shared/ui';

@Component({
  selector: 'venusta-calendar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {}
