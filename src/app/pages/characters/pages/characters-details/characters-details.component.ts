import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GotService } from 'src/app/shared/services/got.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {

  name: string;
  character;
  house;
  houseName;
  logoHouse;

  constructor(private activatedRoute: ActivatedRoute, private gotService: GotService) {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params.name) {
        this.name = params.name;
      }
    });
  }

  ngOnInit(): void {
    this.gotService.getCharacterName(this.name).subscribe(character => {
      this.character = (character);
      this.houseName = (character)
      this.houseName = ((this.houseName.house))
      console.log(this.character.house);
      
      this.gotService.getAllHouses().subscribe( (res:any) => {
        res.forEach( elemento => {
          if( elemento.name === this.houseName){
            console.log(elemento.logoURL)
            this.logoHouse = elemento.logoURL;
          }else if (this.character.house == "House Baratheon of King&apos;s Landing"){
            this.logoHouse = "https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Baratheon-of-King%27s_Landing-Main-Shield.PNG"
          }else if (this.character.house == "House Cassel"){
            this.logoHouse = "https://awoiaf.westeros.org/images/c/c3/House_Cassel.PNG"
          }

    })
    
      });
    })  }

}
