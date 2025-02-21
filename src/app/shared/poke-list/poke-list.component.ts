import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';

@Component({
  selector: 'poke-list',
  standalone: true,
  imports: [],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent implements OnInit{




  constructor(private pokeApiService: PokeApiService){
  }



  ngOnInit(): void {
    this.pokeApiService.getPokemons().subscribe(res => console.log(res));
  }

}
