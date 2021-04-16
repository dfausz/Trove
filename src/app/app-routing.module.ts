import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterFormComponent } from './character-form/character-form.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent},
  { path: 'add', component: CharacterFormComponent },
  { path: '',   redirectTo: '/characters', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
