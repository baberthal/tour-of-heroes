import {Component, OnInit} from '@angular/core';

import {Hero} from '../../models';
import {HeroService} from '../../services';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styles: [
    String(require('./heroes.component.scss')),
  ],
  directives: [HeroDetailComponent],
  providers: [HeroService],
})
export class HeroesComponent implements OnInit {
  public title = 'Tour of Heroes';
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() { this.getHeroes(); }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
