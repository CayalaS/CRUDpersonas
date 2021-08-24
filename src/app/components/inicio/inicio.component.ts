import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private personasService:PersonasService) { }

  ngOnInit(): void {

    this.personasService.emitirContador();

  }

}
