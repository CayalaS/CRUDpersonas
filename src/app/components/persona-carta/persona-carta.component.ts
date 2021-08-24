import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/persona.interface';
import { PersonasService } from 'src/app/services/personas.service';


@Component({
  selector: 'app-persona-carta',
  templateUrl: './persona-carta.component.html',
  styleUrls: ['./persona-carta.component.css']
})
export class PersonaCartaComponent implements OnInit {

  classCard = 'card';

  @Input() persona: Persona = {
    id: 0,
    user: "",
    password: "",
    surname: "",
    company_email: "",
    personal_email: "",
    city: "",
    birthdate: new Date()
  };

  constructor(private personasService: PersonasService) { }



  ngOnInit(): void {
    console.log(this.persona);
  }

  borrarPersona() {
    this.personasService.borrarPersona(this.persona.id)
    .subscribe();
    
    this.classCard = "card-disabled";
  }

}
