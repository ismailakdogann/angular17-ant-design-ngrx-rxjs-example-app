// @angular
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

// antd
import { provideNzIcons } from './icons-provider';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';

// locale
registerLocaleData(en);

// routes
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNzIcons(),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
  ],
};
