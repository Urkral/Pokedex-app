import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {
  pokemons :any[] = []
  page = 1;
  totalPokemons: number=0;
  constructor(
    private dataService: DataService
    ) { }
    
    ngOnInit(): void {
      this.getPokemons()
  }
  getPokemons() {
    this.dataService.getPokemons(10, this.page + 0)
      .subscribe((response:any)=>{
        this.totalPokemons = response.count;

        response.results.forEach((result: { name: string; }) => {
          this.dataService.getMoreData(result.name)
          .subscribe((responseUnique)=>{
            this.pokemons.push(responseUnique)
            console.log(this.pokemons);
            
          })
        });
      })
  }

}
