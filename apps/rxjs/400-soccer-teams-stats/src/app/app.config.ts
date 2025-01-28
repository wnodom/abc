import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  provideZoneChangeDetection
} from '@angular/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideHttpClient(),
    provideMomentDateAdapter(),
    provideRouter(appRoutes)
  ]
};
