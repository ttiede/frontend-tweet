import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router'
import { AppComponent } from './app.component';
import { RelevantsComponent } from './list-tweets/relevants/relevants.component';
import { MentionsComponent } from './list-tweets/mentions/mentions.component';

@NgModule({
  declarations: [
    AppComponent,
    RelevantsComponent,
    MentionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
