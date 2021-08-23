import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  localUrl = 'http://localhost:3000/persons/';

  constructor(private http: HttpClient) { }

  cargarPersonas() {
    const url = this.localUrl;

    return this.http.get<Persona>(url);

  }

  cargarPersona(id: number) {
    const url = this.localUrl + id;

    return this.http.get<Persona>(url);
  }

  actualizarPersona(persona: Persona, id: number) {
    const url = this.localUrl + id;

    return this.http.put<Persona>(url, persona);
  }

  borrarPersona(id: number) {
    const url = this.localUrl + id;

    return this.http.delete<Persona>(url);
  }
}
