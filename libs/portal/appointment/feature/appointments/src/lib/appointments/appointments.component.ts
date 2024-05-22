import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { EventSourceInput } from '@fullcalendar/core';
import { Store } from '@ngrx/store';
import { CreateComponent } from '@venusta/portal/appointment/create';
import {
  appointmentFeature,
  appointmentPageActions,
} from '@venusta/portal/appointment/data-access';
import { Appointment, TimeSlot } from '@venusta/portal/appointment/models';
import { ScheduleComponent } from '@venusta/portal/appointment/ui/schedule';
import { SchedulerUtils } from '@venusta/portal/appointment/utils';
import { CardComponent } from '@venusta/shared/ui';
import { filterNullAndUndefined } from '@versure/utilities';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'venusta-appointments',
  standalone: true,
  imports: [
    CommonModule,
    FullCalendarModule,
    ScheduleComponent,
    CreateComponent,
    CardComponent,
  ],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent implements OnInit {
  private readonly store = inject(Store);

  private appointments$!: Observable<Appointment[]>;
  protected events$!: Observable<EventSourceInput>;

  protected selectedTimeSlot!: TimeSlot;

  ngOnInit(): void {
    this.store.dispatch(appointmentPageActions.loadAppointments());
    this.appointments$ = this.store
      .select(appointmentFeature.selectAppointments)
      .pipe(filterNullAndUndefined());
    this.events$ = this.appointments$.pipe(
      map(appointments => SchedulerUtils.toEventSourceInput(appointments)),
    );
  }

  protected onEventSelect(event: string): void {
    console.log(event);
  }

  protected onSlotSelect(timeSlot: TimeSlot): void {
    console.log('timeslot set');
  }
}
