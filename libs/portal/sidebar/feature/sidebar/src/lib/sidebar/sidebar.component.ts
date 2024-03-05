import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Observable } from "rxjs";
import { MatIconModule } from "@angular/material/icon";
import { PortalState } from '@venusta/portal/shared/data-access';
import { Store } from "@ngrx/store";
import { portalFeature } from "@venusta/portal/shared/data-access";

@Component({
  selector: 'venusta-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit{
  private readonly store = inject(Store<PortalState>);

  isExpanded$!: Observable<boolean>;

  ngOnInit(): void {
    this.isExpanded$ = this.store.select(portalFeature.selectSidebarExpanded);
  }
}
