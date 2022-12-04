import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppserviceService {
  constructor(private http: HttpClient) {}

  getAlumnos() {
    return this.http.get<any>('assets/Alumnos.json');
  }
}
