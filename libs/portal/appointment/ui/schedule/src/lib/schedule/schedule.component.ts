import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from "@fullcalendar/angular";
import { CalendarOptions, EventSourceInput } from "@fullcalendar/core";
import nlLocale from "@fullcalendar/core/locales/nl";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { SchedulerUtils } from "@venusta/portal/appointment/utils";
import { TimeSlot } from "@venusta/portal/appointment/models";

@Component({
  selector: 'venusta-schedule',
  standalone: true,
    imports: [CommonModule, FullCalendarModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent {
  @Input()
  events!: EventSourceInput;

  @Output()
  eventSelected: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  slotSelected: EventEmitter<TimeSlot> = new EventEmitter<TimeSlot>();

  protected calendarOptions: CalendarOptions = {
    selectable: true,
    initialView: 'timeGridWeek',
    locale: nlLocale,
    plugins: [interactionPlugin,dayGridPlugin,timeGridPlugin],
    allDaySlot: false,
    slotMinTime: '08:00',
    slotMaxTime: '22:00',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay' // user can switch between the two
    },
    businessHours: {
      daysOfWeek: [ 1, 2, 3, 4, 5 ],
      startTime: '08:30', // a start time (10am in this example)
      endTime: '22:00', // an end time (6pm in this example)
    },
    weekends: false,
    select: (info) => {
      // When a day of month has been clicked, open week view
      if(info.allDay && info.view.type === 'dayGridMonth'){
        info.view.calendar.gotoDate(info.start);
        info.view.calendar.changeView('timeGridWeek');
      }
      // Return the selected time slot
      this.slotSelected.emit(SchedulerUtils.toTimeSlot(info));
    },
    eventClick: (event) => {
      this.eventSelected.emit(event.event.id);
    },
  };
}
