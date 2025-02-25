import { Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path:'details/:id',
    component: DetailsComponent
  },
  {
    path:'**',
    redirectTo: '' // Redireciona para Home caso a rota não seja encontrada
  }
];
