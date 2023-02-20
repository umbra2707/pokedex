import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() name: string = '';
  imageUrl: string = '';
  pokemon: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getByName(this.name).subscribe(
      (response) => {
        this.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.id}.png`;
        this.pokemon = response;

        for (const iterator of this.pokemon.types) {
          iterator.url = `../../../assets/icons/${iterator.type.name}.svg`
          iterator.class = `icon ${iterator.type.name}`
        }

        console.log(response);
      })
  }
}
