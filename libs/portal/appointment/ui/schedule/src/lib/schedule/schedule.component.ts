import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from "@fullcalendar/angular";
import { Calendar, CalendarOptions, EventSourceInput } from "@fullcalendar/core";
import nlLocale from "@fullcalendar/core/locales/nl";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

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
  slotSelected: EventEmitter<any> = new EventEmitter<any>();

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

      this.slotSelected.emit(info);
    },
    eventClick: (event) => {
      this.eventSelected.emit(event.event.id);
    },
  };
}
