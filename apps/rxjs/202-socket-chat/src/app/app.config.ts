import {
  ApplicationConfig,
  provideZoneChangeDetection
} from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const config: SocketIoConfig = {
  url: 'http://localhost:8085',
  options: {}
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    importProvidersFrom(SocketIoModule.forRoot(config))
  ]
};
