import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RelevantsComponent } from './list-tweets/relevants/relevants.component';
import { MentionsComponent } from './list-tweets/mentions/mentions.component';

export const router: Routes = [
  { path: '', redirectTo: 'relevants', pathMatch: 'full'},
  { path: 'relevants', component: RelevantsComponent },
  { path: 'mentions', component: MentionsComponent }
];

export const routes: ModuleWithProviders =  RouterModule.forRoot(router);