import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAll().subscribe(
      (response) => {
        for (const iterator of response.results) {
          this.data.push({
                            name: iterator.name
                        })
        }
        console.log(this.data);
      })
  }

}
