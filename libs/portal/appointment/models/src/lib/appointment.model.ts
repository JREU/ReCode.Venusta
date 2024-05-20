export type Appointment = {
  id: number;
  customerId:number;
  startAt: Date;
  endAt: Date;
  services: number[];
  description: string;
}
