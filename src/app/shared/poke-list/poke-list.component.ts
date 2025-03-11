import { Component, inject, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokeSearchComponent } from "../poke-search/poke-search.component";

@Component({
  selector: 'poke-list',
  standalone: true,
  imports: [CommonModule, RouterModule, PokeSearchComponent],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent implements OnInit {

  // Injetando a depencencia do service
  private pokeApiService = inject(PokeApiService);

  private setAllPokemons: any;
  public getAllPokemons: any;
  public apiError: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error => {
        this.apiError = true;
      }

    );
  }

  public getValueOfSearch(value: string){
    const filter = this.setAllPokemons.filter((res: any) => {
      return res.name.toLowerCase().startsWith(value.toLowerCase());

    })
    this.getAllPokemons = filter;
  }
}
