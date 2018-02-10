import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DiscussionsComponent } from './components/discussions/discussions.component';
import { AccountComponent } from './components/account/account.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { MovieaddComponent } from './components/movieadd/movieadd.component';
import { ReviewComponent } from './components/review/review.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'discussions', component: DiscussionsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'movieadd', component: MovieaddComponent },
  { path: 'review/:id', component: ReviewComponent },
  { path: 'detail/:id', component: DetailsComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
