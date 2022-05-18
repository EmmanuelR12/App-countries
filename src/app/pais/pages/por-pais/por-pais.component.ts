import { Component, } from '@angular/core';
import {Country} from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {

  termino:string= '' 
  paises:Country[]= [];
  hayError:boolean= false;
  mostrarSugerencias:boolean=false;
  paisesSugeridos:Country[]=[];
  constructor(private PaisService:PaisService){
  }
  buscar(termino:string){
    this.mostrarSugerencias =false;
    this.hayError = false;
    this.termino= termino
    this.PaisService.buscarPais(this.termino)
      .subscribe((paises) =>{
        console.log(paises);
	this.paises = paises
      },(err)=>{
	this.hayError = true;
	this.paises = [];
      });
  }
  buscarSugerido(termino:string){
    this.buscar(termino)
  }
  sugerencias(termino:string){
    this.hayError=false;
    this.mostrarSugerencias=true
    this.termino = termino
    this.PaisService.buscarPais(termino).
      subscribe(paises =>this.paisesSugeridos = paises.slice(0,5),
      (err)=>this.paisesSugeridos=[])
  }

}
