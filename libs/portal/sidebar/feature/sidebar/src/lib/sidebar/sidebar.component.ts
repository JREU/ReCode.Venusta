import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { portalFeature, PortalState } from '@venusta/portal/shared/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'venusta-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  private readonly store = inject(Store<PortalState>);

  isExpanded$!: Observable<boolean>;

  ngOnInit(): void {
    this.isExpanded$ = this.store.select(portalFeature.selectSidebarExpanded);
  }
}
