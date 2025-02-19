import { Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path:'details',
    component: DetailsComponent
  },
  {
    path:'**',
    redirectTo: 'home' // Redireciona para Home caso a rota não seja encontrada
  }
];
