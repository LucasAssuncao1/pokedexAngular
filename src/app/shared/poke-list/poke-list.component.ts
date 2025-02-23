import { Component, inject, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'poke-list',
  standalone: true,
  imports: [],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent implements OnInit{

  // private pokeApiService = inject(PokeApiService);


  constructor(private pokeApiService: PokeApiService){
  }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => console.log(res)
      
    );
  }

}
