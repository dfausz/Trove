import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/Character';
import {Router} from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private router: Router) 
  { 
    this.Router = router;
  }

  characters: Character[];
  Router: Router;

  ngOnInit() {
    var charactersJSON = localStorage.getItem("characters");
    if (charactersJSON === null) charactersJSON = "[]";
    this.characters = JSON.parse(charactersJSON);
  }

  removeCharacter(character: Character){
    _.remove(this.characters, character);
    localStorage.setItem('characters', JSON.stringify(this.characters));
  }

  addCharacter(){
    this.Router.navigate(['/add']);
  }

}
