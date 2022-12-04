import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { ExamenComponent } from './examen/examen.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [AppComponent, CalificacionesComponent, ExamenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    CheckboxModule,
    CardModule,
    ButtonModule,
    SplitterModule,
    RadioButtonModule,
    DropdownModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
