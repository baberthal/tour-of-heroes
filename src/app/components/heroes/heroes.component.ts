import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(private router: Router, private heroService: HeroService) {}

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() { this.getHeroes(); }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() { this.router.navigate(['/detail', this.selectedHero.id]); }
}
