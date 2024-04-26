import { Appointment, TimeSlot } from "@venusta/portal/appointment/models";
import { DateSelectArg, EventInput, EventSourceInput } from "@fullcalendar/core";

export class SchedulerUtils {
  static toEventSourceInput(appointments: Appointment[]): EventSourceInput {
    return appointments.map(appointment => ({
      id: appointment.id.toString(),
      title: appointment.description,
      start: appointment.startAt,
      end: appointment.endAt
    }) as EventInput);
  }

  static toTimeSlot(dateSelectArg: DateSelectArg): TimeSlot {
    return {
      start: dateSelectArg.start,
      end: dateSelectArg.end,
      allDay: dateSelectArg.allDay
    }
  }
}


