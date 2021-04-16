import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/Character';
import {Router} from '@angular/router';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit {

  Router: Router;
  player = "";
  character = "";
  initiative = "";

  constructor(private router: Router) 
  {
    this.Router = router;
  }

  ngOnInit() {
  }

  saveCharacter(){
    var charactersJSON = localStorage.getItem("characters");
    if (charactersJSON === null) charactersJSON = "[]";
    var characters : Character[]  = JSON.parse(charactersJSON);
    if(!this.isCharacterEmpty()){
      characters.push(new Character(this.player, this.character, this.initiative))
      localStorage.setItem("characters", JSON.stringify(characters));
      this.Router.navigate(['/characters']);
    }
  }

  isCharacterEmpty(){
    if(this.player === "" && this.character === "" && this.initiative === "")
      return true;
    else
      return false;
  }

}

