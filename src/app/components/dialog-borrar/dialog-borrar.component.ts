import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-borrar',
  templateUrl: './dialog-borrar.component.html',
  styleUrls: ['./dialog-borrar.component.css']
})
export class DialogBorrarComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
