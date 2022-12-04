import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from './appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RH';
  constructor(private router: Router) {}

  Calificaciones() {
    this.router.navigate(['calificaciones']);
  }
  Examen() {
    this.router.navigate(['examen']);
  }
}
