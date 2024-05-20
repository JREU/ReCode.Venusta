import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchComponent } from '@venusta/portal/search';
import {
  portalFeature,
  portalPageActions,
} from '@venusta/portal/shared/data-access';
import { CardComponent } from '@venusta/shared/ui';
import { Observable } from 'rxjs';

@Component({
  selector: 'venusta-header',
  standalone: true,
  imports: [CommonModule, SearchComponent, CardComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private readonly store = inject(Store);

  protected darkMode$!: Observable<boolean>;
  protected profileMenuExpanded$!: Observable<boolean>;

  ngOnInit(): void {
    this.profileMenuExpanded$ = this.store.select(
      portalFeature.selectProfileMenuExpanded,
    );

    this.darkMode$ = this.store.select(portalFeature.selectDarkMode);
  }

  protected toggleProfileMenu(): void {
    this.store.dispatch(portalPageActions.toggleProfileMenu());
  }

  protected toggleDarkMode(): void {
    this.store.dispatch(portalPageActions.toggleDarkMode());
  }

  protected signOut(): void {
    console.error('Signing out not implemented');
    this.toggleProfileMenu();
  }
}
