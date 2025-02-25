import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  standalone: true,
  imports: [],
  templateUrl: './poke-search.component.html',
  styleUrl: './poke-search.component.scss'
})
export class PokeSearchComponent {

  @Output() public emitSearch: EventEmitter<string> = new EventEmitter();

  public searchPokemons(value: string){
    this.emitSearch.emit(value);
  }
}
