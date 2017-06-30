import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MentionsComponent } from './list-tweets/mentions/mentions.component';

export const router: Routes = [
  { path: '', redirectTo: 'relevants', pathMatch: 'full'},
  { path: 'mentions', component: MentionsComponent }
];

export const routes: ModuleWithProviders =  RouterModule.forRoot(router);