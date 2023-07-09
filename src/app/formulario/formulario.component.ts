import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  userModel = {
    nombre: '',
    apellido:'',
    email:'',
    comentario:'',
  }

}
