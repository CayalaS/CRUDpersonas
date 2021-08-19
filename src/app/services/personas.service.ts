import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  cargarPersonas() {
    const url = 'http://localhost:3000/persons/';

    return this.http.get<Persona>(url);

  }

  cargarPersona(id: number) {
    const url = 'http://localhost:3000/persons/'+ id;

    return this.http.get<Persona>(url);
  }
}
