import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {API_ENDPOINT_TOKEN} from "./tokens/api-endpoint.token";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideHttpClient(withFetch()), {
    provide: API_ENDPOINT_TOKEN,
    useValue: API_ENDPOINT_TOKEN
  }]
};
