import { registerLocaleData } from '@angular/common';
import localeNL from '@angular/common/locales/nl';
import { ApplicationConfig, LOCALE_ID, isDevMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { portalRoutes } from '@venusta/portal/shell';
registerLocaleData(localeNL);
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(portalRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    provideStore(),
    provideEffects(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      connectInZone: true,
    }),
    {
      provide: LOCALE_ID,
      useValue: 'nl-NL',
    },
  ],
};
