import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appointmentFeature, appointmentPageActions, AppointmentState } from "@venusta/portal/appointment/data-access";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Appointment } from "@venusta/portal/appointment/models";
import { filterNullAndUndefined } from "@recode/utilities";
import { FullCalendarModule } from "@fullcalendar/angular";
import { CalendarOptions } from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'venusta-appointments',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent implements OnInit {
  private readonly store = inject(Store<AppointmentState>);

  protected appointments$!: Observable<Appointment[]>;

  protected calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };

  ngOnInit(): void {
    this.store.dispatch(appointmentPageActions.loadAppointments());
    this.appointments$ = this.store.select(appointmentFeature.selectAppointments).pipe(filterNullAndUndefined());
  }
}
