import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './components/personas/personas.component';
import { EditarComponent } from './components/editar/editar.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista_persona', pathMatch: 'full' },
  { path: 'lista_persona', component: PersonasComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'anadir', component: EditarComponent },
  { path: 'inicio', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
