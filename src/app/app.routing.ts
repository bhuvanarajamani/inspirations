import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';

import { HomeComponent } from './components/presentation/home/home.component';
import { AboutComponent } from './components/presentation/about/about.component';
import { NotFoundComponent } from './components/presentation/not-found/not-found.component'

const APP_ROUTES : Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);