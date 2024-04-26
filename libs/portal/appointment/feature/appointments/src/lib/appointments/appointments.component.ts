import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appointmentFeature, appointmentPageActions, AppointmentState } from "@venusta/portal/appointment/data-access";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { Appointment, TimeSlot } from "@venusta/portal/appointment/models";
import { filterNullAndUndefined } from "@recode/utilities";
import { FullCalendarModule } from "@fullcalendar/angular";
import { ScheduleComponent } from "@venusta/portal/appointment/ui/schedule";
import { EventSourceInput } from "@fullcalendar/core";
import { SchedulerUtils } from "@venusta/portal/appointment/utils";
import { CreateComponent } from "@venusta/portal/appointment/create";
import { CardComponent } from "@venusta/shared/ui";

@Component({
  selector: 'venusta-appointments',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, ScheduleComponent, CreateComponent, CardComponent],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent implements OnInit {
  private readonly store = inject(Store<AppointmentState>);

  private appointments$!: Observable<Appointment[]>;
  protected events$!: Observable<EventSourceInput>;

  protected selectedTimeSlot!: TimeSlot;

  ngOnInit(): void {
    this.store.dispatch(appointmentPageActions.loadAppointments());
    this.appointments$ = this.store.select(appointmentFeature.selectAppointments).pipe(filterNullAndUndefined());
    this.events$ = this.appointments$.pipe(map(appointments => SchedulerUtils.toEventSourceInput(appointments)));
  }

  protected onEventSelect(event: string): void {
    console.log(event);
  }

  protected onSlotSelect(timeSlot: TimeSlot): void {
    console.log('timeslot set');
  }
}
