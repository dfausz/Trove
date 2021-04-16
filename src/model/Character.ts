export class Character {
    player: string;
    character: string;
    initiative: string;

    constructor(player: string, character: string, initiative: string){
        this.player = player;
        this.character = character;
        this.initiative = initiative;
    }
}