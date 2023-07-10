import { Component, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

interface UserModel {
    nombre: FormControl<string | null>;
    apellido: FormControl<string | null>;
    email: FormControl<string | null>;
    comentario: FormControl<string | null>;
  }

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  nombreControl = new FormControl('', [Validators.required]);
  apellidoControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required]);
  comentarioControl = new FormControl('', [Validators.required]);

  userModel: FormGroup<UserModel> = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
    comentario: this.comentarioControl
  });
}
