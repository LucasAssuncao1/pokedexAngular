import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';
  //injetando a dependência HttpClient
  private http = inject(HttpClient);

  constructor() { }

  //Criar um metodo para pegar os pokemons
  getPokemons() {
    return this.http.get<any>(this.url);
  }


}
