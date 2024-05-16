import { DatePipe } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnInit,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { DateUtils } from '@venusta/shared/utils';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'input[type=date][formControlName]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DateDirective,
    },
    DatePipe,
  ],
})
export class DateDirective implements ControlValueAccessor, OnInit {
  formControlName = input.required<string>();

  private formControl!: FormControl;
  private formGroup!: FormGroup;

  private readonly elementRef = inject(ElementRef);
  private readonly controlContainer = inject(ControlContainer);
  private readonly datePipe = inject(DatePipe);

  /**
   * Handle blur event on input
   * @param event
   */
  @HostListener('change', ['$event']) onInput(event: InputEvent) {
    const input = event?.target as HTMLInputElement;
    this.setFormControlValue(input.value);
  }

  ngOnInit(): void {
    if (!this.formControlName) {
      console.error(
        'The date directive can only be used on a reactive form control',
      );
    }

    this.formGroup = this.controlContainer?.control as FormGroup;

    if (!this.formGroup) {
      console.error(
        'Could not transform date input value, form group is not defined',
      );
    }

    this.formControl = this.formGroup?.get(
      this.formControlName(),
    ) as FormControl;

    if (!this.formControl) {
      console.error(
        'Could not transform date input value, form control is not defined',
      );
    }
  }
  writeValue(date: Date): void {
    this.transformValues(date);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  registerOnChange = (): void => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  registerOnTouched = (): void => {};

  setDisabledState(isDisabled: boolean) {
    const input = this.elementRef.nativeElement as HTMLInputElement;
    input.readOnly = isDisabled;
  }

  /**
   * Transform the date values
   * @param date
   * @private
   */
  private transformValues(date: Date): void {
    this.transformInputElementValue(date);
  }

  private setFormControlValue(date: string): void {
    const value = new Date(date);

    this.formControl.setValue(value, {
      emitEvent: false,
      emitModelToViewChange: false,
      emitViewToModelChange: false,
    });
  }

  /**
   * Transform the date value of the input html element
   * @param date
   * @returns string
   */
  private transformInputElementValue(date: Date): string {
    const transformedValue =
      this.datePipe.transform(date, DateUtils.defaultHTML5DateFormat) ?? '';
    const inputElement = this.elementRef.nativeElement as HTMLInputElement;
    inputElement.value = transformedValue;
    return transformedValue;
  }
}
