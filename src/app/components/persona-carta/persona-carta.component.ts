import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Persona } from '../../interfaces/persona.interface';
import { PersonasService } from 'src/app/services/personas.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBorrarComponent } from '../dialog-borrar/dialog-borrar.component';



@Component({
  selector: 'app-persona-carta',
  templateUrl: './persona-carta.component.html',
  styleUrls: ['./persona-carta.component.css']
})
export class PersonaCartaComponent implements OnInit {

  //classCard = 'card';

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

  @Output() personajeBorrado: EventEmitter<Persona> = new EventEmitter();

  constructor(private personasService: PersonasService,
    public dialog: MatDialog) { }



  ngOnInit(): void {
    console.log(this.persona);
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogBorrarComponent, {data: {name: this.persona.user}});

    dialogRef.afterClosed().subscribe(result => {
      if (result === "true") {
        this.borrarPersona();
      }
    });
  }

  borrarPersona() {
    this.personasService.borrarPersona(this.persona.id)
    .subscribe();
    
    this.personajeBorrado.emit(this.persona);
    
    //this.classCard = "card-disabled";
  }

}
