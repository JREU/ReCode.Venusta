import { Directive, ElementRef, inject, OnInit, Renderer2, Self } from '@angular/core';
import { MatTable } from "@angular/material/table";

@Directive({
  selector: '[mat-header-cell]',
  standalone: true,
})
export class TableDirective implements OnInit {
  @Self() private readonly table = inject(MatTable<any>);
  @Self() private readonly elementRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
    ngOnInit(): void {
        console.log('initializing table directive', this.table, this.elementRef);
        this.renderer.addClass(this.elementRef.nativeElement, 'venusta-table');
    }
}
