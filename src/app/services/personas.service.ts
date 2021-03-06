import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../interfaces/persona.interface';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  contadorBorrar = 0;
  prueba:EventEmitter<String> = new EventEmitter();

  constructor(private http: HttpClient) { }

  cargarPersonas() {
    const url = environment.apiUrl;
    this.emitirContador();
    return this.http.get<Persona>(url);

  }

  cargarPersona(id: number) {
    const url = environment.apiUrl + id;

    return this.http.get<Persona>(url);
  }

  anadirPersona(persona: Persona) {
    const url = environment.apiUrl;

    return this.http.post<Persona>(url, persona);
  }

  actualizarPersona(persona: Persona, id: number) {
    const url = environment.apiUrl + id;

    return this.http.put<Persona>(url, persona);
  }

  borrarPersona(id: number) {
    const url = environment.apiUrl + id;

    this.contadorBorrar = JSON.parse(localStorage.getItem('contador')!) + 1;
    localStorage.setItem('contador', JSON.stringify(this.contadorBorrar));
    this.emitirContador();

    //localStorage.removeItem('contador')

    return this.http.delete<Persona>(url);
  }

  emitirContador(){
    this.prueba.emit(localStorage.getItem('contador')!);
  }
}
