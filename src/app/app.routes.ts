import {RouterConfig, provideRouter} from '@angular/router';

import {DashboardComponent, HeroesComponent} from './components';

const routes: RouterConfig = [
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];

export const appRouterProviders = [
  provideRouter(routes),
];
