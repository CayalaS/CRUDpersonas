import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Persona } from 'src/app/interfaces/persona.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogBorrarComponent } from '../dialog-borrar/dialog-borrar.component';

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
    private location: Location,
    private formBuilder: FormBuilder,
    public router: Router,
    private snakBar: MatSnackBar,
    public dialog: MatDialog) { }

    formPersonas = this.formBuilder.group({
      id: [''],
      user: ['', Validators.required],
      password: ['', Validators.required],
      surname: ['', Validators.required],
      company_email: ['', [Validators.required, Validators.email]], 
      personal_email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      birthdate: ['', Validators.required]
    })

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id != 0) {
      this.personasService.cargarPersona(id)
      .subscribe(persona =>{  

      console.log(persona);
      this.formPersonas.patchValue(persona);

      });
    }    
  }

  guardarPersona(): void {
    if (this.formPersonas.valid) {
    this.personasService.actualizarPersona(this.formPersonas.value, this.formPersonas.value.id)
    .subscribe(persona =>{  

      console.log(persona);
      this.persona = persona;

      });

      this.atras();
    }  else {
      this.snakBar.open ("Faltan campos o son incorrectos en el formulario", "", {
        duration: 5000,
        panelClass: ['snackbar']
      });
    }
  }

  borrarPersona() {
    this.personasService.borrarPersona(this.formPersonas.value.id)
    .subscribe();

    this.atras();
  }

  anadirPersona(){
    if (this.formPersonas.valid) {
      console.log(this.formPersonas.value);
      this.personasService.anadirPersona(this.formPersonas.value)
      .subscribe(persona =>{
      
        console.log(persona);
        this.persona = persona;

      });

    this.atras();
    } else {
      this.snakBar.open ("Faltan campos o son incorrectos en el formulario", "", {
        duration: 5000,
        panelClass: ['snackbar']
      });
    }
  }

  vaciarFormulario(){
    this.formPersonas.patchValue({
      id: '',
      user: '',
      password: '',
      surname: '',
      company_email: '',
      personal_email: '',
      city: '',
      birthdate: ''
    })


  }

  atras() {
    setTimeout(() => {
      this.router.navigate(['/lista_persona']);
    }
    , 20);
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogBorrarComponent, {data: {name: this.formPersonas.value.user}});

    dialogRef.afterClosed().subscribe(result => {
      if (result === "true") {
        this.borrarPersona();
      }
    });
  }
}
