import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./features/home/home.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesComponent } from './features/notes/notes.component';
import {CookiesService} from "./infrastructure/services/cookies/cookies.service";
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NewNoteComponent } from './features/new-note/new-note.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotesComponent,
    NavbarComponent,
    NewNoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [CookiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
