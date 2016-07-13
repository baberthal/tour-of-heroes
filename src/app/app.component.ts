/// <reference path='../../typings/index.d.ts' />

import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {HeroService} from './services';

@Component({
  selector: 'hero-app',
  templateUrl: './app.component.html',
  styles: [String(require('../global.scss'))],
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Tour of Heroes';
};
