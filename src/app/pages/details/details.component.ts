import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from '../../service/poke-api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  // Injeções de dependência
  //  private activatedRoute = Inject(ActivatedRoute);
  //  private pokeApiService = Inject(PokeApiService);

  // urls advindas da API
  private urlPokemon = 'https://pokeapi.co/api/v2/pokemon';
  private urlName = 'https://pokeapi.co/api/v2/pokemon-species';

  // a injeção precisa ser feita no construtor pra funcionar 
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokemon;
  }

    get pokemon() {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (!id) {
        console.error('ID não encontrado na rota');
        return;
      }
  
      const pokemon = this.pokeApiService.apiGetPokemon(`${this.urlPokemon}/${id}`);
      const name = this.pokeApiService.apiGetPokemon(`${this.urlName}/${id}`);
  
      forkJoin([pokemon, name]).subscribe(
        res => console.log(res),
        err => console.error('Erro ao buscar Pokémon:', err)
      );
    }
  }
