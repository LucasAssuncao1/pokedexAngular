import { Component } from '@angular/core';
import { PokeHeaderComponent } from '../../shared/poke-header/poke-header.component';
import { PokeSearchComponent } from '../../shared/poke-search/poke-search.component';
import { PokeListComponent } from "../../shared/poke-list/poke-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PokeHeaderComponent, PokeSearchComponent, PokeListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
