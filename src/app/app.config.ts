import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { TitleStrategy, provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { TemplatePageTitleStrategy } from './template-page-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withComponentInputBinding()),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy}
  ]
};
