import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";



@Component({
  selector: 'venusta-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  private readonly formBuilder = inject(FormBuilder);
  //private readonly config = inject(DynamicDialogConfig);
  constructor(){
    effect(() => {
      //this.createAppointmentForm.patchValue({...this.config.data});
    });
  }

  protected createAppointmentForm = this.formBuilder.group({
    customerId: new FormControl<number | null>(null, Validators.required),
    start: new FormControl<Date | null>(null, Validators.required),
    end: new FormControl<Date | null>(null, Validators.required),
    allDay: new FormControl<boolean>(false, Validators.required),
    services: new FormArray([], Validators.minLength(1))
  });

  protected onSubmit(): void {
    console.log('Submitted', this.createAppointmentForm.value);
  }
}
