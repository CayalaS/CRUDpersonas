import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  contadorBorrar = 0;
  prueba:EventEmitter<String> = new EventEmitter();

  localUrl = 'http://localhost:3000/persons/';

  constructor(private http: HttpClient) { }

  cargarPersonas() {
    const url = this.localUrl;
    this.emitirContador();

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

    this.contadorBorrar = JSON.parse(localStorage.getItem('contador')!) + 1;
    localStorage.setItem('contador', JSON.stringify(this.contadorBorrar));
    console.log(localStorage.getItem('contador'));
    this.emitirContador();

    //localStorage.removeItem('contador')

    return this.http.delete<Persona>(url);
  }

  emitirContador(){
    this.prueba.emit(localStorage.getItem('contador')!);
  }
}
