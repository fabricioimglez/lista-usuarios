import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaComponent } from './pages/lista/lista.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'lista-usuarios', component: ListaComponent },


];
