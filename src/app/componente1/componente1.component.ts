import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  erDNI = '^[0-9]{8}[A-za-z]$';
  mostrarInfo ="";
  erMens = "";
  mostrarMens="";

  EnviarDatos(nombre,dni,mensaje){
    if(nombre.value==""){
      alert("El nombre esta vacio");
    }

    if(dni.match(this.erDNI)){
      this.mostrarInfo="Correcto";
    }else{
      this.mostrarInfo="Incorrecto";
    }

    if(mensaje.value.length<=2){
      this.mostrarMens="Este mensaje es demasiado corto";
    }

  }



}
