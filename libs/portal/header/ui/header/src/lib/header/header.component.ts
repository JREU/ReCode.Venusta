import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "@venusta/portal/search";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { portalPageActions, PortalState } from "@venusta/portal/shared/data-access";
import { Store } from "@ngrx/store";

@Component({
  selector: 'venusta-header',
  standalone: true,
    imports: [CommonModule, SearchComponent, MatToolbarModule, MatIconModule, MatBadgeModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private readonly store = inject(Store<PortalState>);
  protected onMenuClick(): void {
    this.store.dispatch(portalPageActions.toggleSidebar());
  }
}
