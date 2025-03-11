import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeHeaderComponent } from "../../shared/poke-header/poke-header.component";
import { CommonModule } from '@angular/common';

// Services
import { PokeApiService } from '../../service/poke-api.service';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [PokeHeaderComponent, RouterModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  // Injeções de dependência
  //  private activatedRoute = Inject(ActivatedRoute);
  //  private pokeApiService = Inject(PokeApiService);

  // urls advindas da API
  private urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
  private urlName = 'https://pokeapi.co/api/v2/pokemon-species/';

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  // a injeção precisa ser feita no construtor pra funcionar
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

    public getPokemon() {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (!id) {
        console.error('ID não encontrado na rota');
        return;
      }

      const pokemon = this.pokeApiService.apiGetPokemon(this.urlPokemon + id);
      const name = this.pokeApiService.apiGetPokemon(this.urlName + id);

      forkJoin([pokemon, name]).subscribe(
        res => {
          this.pokemon = res;
          this.isLoading = true;
        },
        error => {
          this.apiError = true;
        }
      );
    }
  }
