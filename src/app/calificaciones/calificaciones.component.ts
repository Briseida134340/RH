import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css'],
})
export class CalificacionesComponent implements OnInit {
  Alumnos = [];

  constructor(private appService: AppserviceService) {}

  ngOnInit(): void {
    this.getAlumnosCalificaciones();
  }

  getAlumnosCalificaciones() {
    this.appService
      .getAlumnos()
      .subscribe((response) => (this.Alumnos = response));
  }
}
