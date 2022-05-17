import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {

  termino:string= 'Hola mundo' 

  constructor(private PaisService:PaisService){

  }
  buscar(){
    console.log(this.termino)
    this.PaisService.buscarPais(this.termino)
      .subscribe(resp =>{
        console.log(resp);
      })
  }

}
