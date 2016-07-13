/// <reference path='../index.ts' />

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Hero} from '../../models';
import {HeroService} from '../../services';

@Component({
  selector: 'hero-detail',
  styles: [String(require('./hero-detail.component.scss'))],
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  hero: Hero;
  sub: any;

  constructor(private heroService: HeroService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero => this.hero = hero);
    });
  }

  ngOnDestroy() { this.sub.unsubscribe(); }

  goBack() { window.history.back(); }
}
