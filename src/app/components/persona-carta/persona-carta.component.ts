import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/persona.interface';


@Component({
  selector: 'app-persona-carta',
  templateUrl: './persona-carta.component.html',
  styleUrls: ['./persona-carta.component.css']
})
export class PersonaCartaComponent implements OnInit {

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

  constructor() { }



  ngOnInit(): void {
    console.log("aa")
    console.log(this.persona);
  }

}
