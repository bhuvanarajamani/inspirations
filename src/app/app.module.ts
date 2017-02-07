import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { QuoteComponent } from './components/containers/quote/quote.component';

import { QuotesService } from './services/quotes.service';
import { ColorsService } from './services/colors.service';
import { NavbarComponent } from './components/presentation/navbar/navbar.component';
import { AboutComponent } from './components/presentation/about/about.component';
import { SearchComponent } from './components/presentation/search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MasonryModule
  ],
  providers: [
    QuotesService,
    ColorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
