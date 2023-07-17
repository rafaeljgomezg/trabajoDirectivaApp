import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabajoDirectivaApp';
  titulo="Registro de usuarios"
  nombre=""
  apellido=""
  cargo=""

  entradas=[
    {titulo:'python cada dia mas presente'},
    {titulo:'java presente desde hace mas de 20 años'},
    {titulo:'JavaScript cada vez mas funcional'},
    {titulo:'Codelink Potencia para tus APPs'},
    {titulo:'¿Pascal, donde estas!!!!!?'}
  ]

  constructor(){
   
  }

  mensaje=""
  registrado=false

  registrarUsuario(){
    this.mensaje="Usuario registrado con exito"
    this.registrado=true
  }
}
