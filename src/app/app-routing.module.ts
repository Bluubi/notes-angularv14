import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {NotesComponent} from "./features/notes/notes.component";
import {NewNoteComponent} from "./features/new-note/new-note.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'notes', component: NotesComponent },
  { path: 'new/note', component: NewNoteComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
