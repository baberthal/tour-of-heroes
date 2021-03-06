/// <reference path='../typings/index.d.ts' />

import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {AppComponent} from './app/app.component';
import {appRouterProviders} from './app/app.routes';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [appRouterProviders]);
