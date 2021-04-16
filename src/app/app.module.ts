import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitiativeComponent } from './initiative/initiative.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterFormComponent } from './character-form/character-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InitiativeComponent,
    CharactersComponent,
    CharacterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
