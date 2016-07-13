/// <reference path='../index.ts' />

import {Component, Input} from '@angular/core';

import {Hero} from '../../models';

@Component({
  selector: 'hero-detail',
  styles: [String(require('./hero-detail.component.scss'))],
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
