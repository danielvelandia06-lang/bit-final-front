import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Tareas } from './components/pages/tareas/tareas';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';

export const routes: Routes = [
  { path: 'inicio', component: Home, title: 'Inicio' },
  { path: 'tareas', component: Tareas, title: 'Tareas' },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFound, title: 'Error 404' },
];
