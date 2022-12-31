import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  textBox: string;
  textNumber: number;
  commentArea: string;
  controlSelector: string;
  activeBtn: boolean = false;

  constructor() {}

  registerForm() {
    console.log('el formulario es', this.activeBtn);
    if (!this.activeBtn) {
      return alert('Faltan completar los campos obligatorios!');
    }
    this.textBox = '';
    this.textNumber = null;
    this.commentArea = '';
    this.controlSelector = '';
    this.activeBtn = false;
    alert('Enviado con exito!')
  }

  validarForm() {
    console.log('se cambio');
    if (this.textBox && this.textNumber && this.controlSelector) {
      return (this.activeBtn = true);
    }
    return (this.activeBtn = false);
  }
}
