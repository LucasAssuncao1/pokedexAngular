import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

// Observable
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  // injetando a dependência HttpClient
  private http = inject(HttpClient);

  constructor() { }

  // Criar um metodo para pegar os pokemons
  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap(res => {
        res.results.map((resPokemons: any) => {

          this.apiGetPokemon(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )

        })
      })
    );
  }

  public apiGetPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
}
