import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

export const router: Routes = [
  { path: '', redirectTo: 'most_relevants', pathMatch: 'full'}
];

export const routes: ModuleWithProviders =  RouterModule.forRoot(router);