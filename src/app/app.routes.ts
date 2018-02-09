import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DiscussionsComponent } from './components/discussions/discussions.component';
import { AccountComponent } from './components/account/account.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'discussions', component: DiscussionsComponent },
  {path: 'account', component: AccountComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
