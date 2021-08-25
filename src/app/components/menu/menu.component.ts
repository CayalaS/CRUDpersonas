import { Component, OnInit, EventEmitter } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  contadorBorrar:String = "";

  constructor(private personasService:PersonasService) { 
  }

  ngOnInit(): void {
    this.contadorBorrar = localStorage.getItem('contador') == null ? "0" : localStorage.getItem('contador')!;
    this.personasService.prueba.subscribe(a => this.contadorBorrar = a);
  }

}
