import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  provideZoneChangeDetection
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    // Turning this to true breaks the cy.clock & cy.tick functionality in the e2e tests...
    provideZoneChangeDetection({ eventCoalescing: false }),
    provideAnimations(),
    provideHttpClient()
  ]
};
