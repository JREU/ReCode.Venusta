import { Appointment } from "@venusta/portal/appointment/models";
import { EventInput, EventSourceInput } from "@fullcalendar/core";

export class SchedulerUtils {
  static toEventSourceInput(appointments: Appointment[]): EventSourceInput {
    return appointments.map(appointment => ({
      id: appointment.id.toString(),
      title: appointment.description,
      start: appointment.startAt,
      end: appointment.endAt
    }) as EventInput);
  }
}
