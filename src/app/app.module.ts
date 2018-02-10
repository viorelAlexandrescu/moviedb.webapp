import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DiscussionsComponent } from './components/discussions/discussions.component';
import { AccountComponent } from './components/account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movies.service';

import { appRoutes } from './app.routes';
import { DetailsComponent } from './components/details/details.component';
import { MovieaddComponent } from './components/movieadd/movieadd.component';
import { UserService } from './services/user.service';
import { ReviewComponent } from './components/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    DiscussionsComponent,
    AccountComponent,
    DetailsComponent,
    MovieaddComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [MovieService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
