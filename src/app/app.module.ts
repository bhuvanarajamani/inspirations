import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';

import { QuotesService } from './services/quotes.service';
import { ColorsService } from './services/colors.service';
import { NavbarComponent } from './components/presentation/navbar/navbar.component';
import { AboutComponent } from './components/presentation/about/about.component';
import { SearchComponent } from './components/presentation/search/search.component';
import { HomeComponent } from './components/presentation/home/home.component';
import { QuoteComponent } from './components/presentation/quote/quote.component';
import { NotFoundComponent } from './components/presentation/not-found/not-found.component'

import { routing } from './app.routing';
import { QuotesDashboardComponent } from './components/containers/quotes-dashboard/quotes-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    HomeComponent,
    NotFoundComponent,
    QuotesDashboardComponent,
    QuotesDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MasonryModule,
    routing
  ],
  providers: [
    QuotesService,
    ColorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
