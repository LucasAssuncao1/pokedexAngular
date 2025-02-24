import { Component, inject, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'poke-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent implements OnInit {

  // Injetando a depencencia do service
  private pokeApiService = inject(PokeApiService);


  public getAllPokemons: any;

  constructor() {
  }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.getAllPokemons = res.results;
      }

    );
  }
}
