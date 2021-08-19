import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  public personas: any = [];

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {

    this.personasService.cargarPersonas()
        .subscribe( resp => {

          console.log(resp);
          this.personas = resp;

        })

  }

}
