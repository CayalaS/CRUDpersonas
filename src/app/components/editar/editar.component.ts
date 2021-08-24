import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Persona } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  persona: Persona = {
    id: 0,
    user: "",
    password: "",
    surname: "",
    company_email: "",
    personal_email: "",
    city: "",
    birthdate: new Date()
  };
  
  constructor(private route: ActivatedRoute,
    private personasService: PersonasService,
    private location: Location) { }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personasService.cargarPersona(id)
      .subscribe(persona =>{  

      console.log(persona);
      this.persona = persona;

      });   
  }

  guardarPersona(): void {
    console.log(this.persona);
    this.personasService.actualizarPersona(this.persona, this.persona.id)
    .subscribe(persona =>{  

      console.log(persona);
      this.persona = persona;

      });

      this.location.back();
  }

  borrarPersona() {
    this.personasService.borrarPersona(this.persona.id)
    .subscribe();

    this.location.back();
  }
}
