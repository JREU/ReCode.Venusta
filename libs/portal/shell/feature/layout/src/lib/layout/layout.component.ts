import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "@venusta/portal/header/ui/header";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatLineModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { SidebarComponent } from "@venusta/portal/sidebar";

@Component({
  selector: 'venusta-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, MatSidenavModule, MatIconModule, MatListModule, MatLineModule, MatButtonModule, RouterLink, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isExpanded = false;
}
