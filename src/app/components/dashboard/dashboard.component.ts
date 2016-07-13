import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from '../../models';
import {HeroService} from '../../services';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [String(require('./dashboard.component.scss'))],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit() {
    this.heroService.getHeroes().then(
        heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero) {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
