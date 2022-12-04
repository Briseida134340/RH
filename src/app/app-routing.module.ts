import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { ExamenComponent } from './examen/examen.component';

const routes: Routes = [
  { path: 'calificaciones', component: CalificacionesComponent },
  { path: 'examen', component: ExamenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
