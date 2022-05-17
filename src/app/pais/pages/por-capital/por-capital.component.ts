import { Component, OnInit } from '@angular/core';
import {Country} from '../../interfaces/pais.interface';
import {PaisService} from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {
  termino:string=''
  paises:Country[]=[]
  hayError:boolean=false

  constructor(private PaisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.hayError=false;
    this.termino= termino
    this.PaisService.buscarCapital(this.termino)
    .subscribe((capital) =>{
      this.paises = capital
    },(err)=>{
      this.hayError = true;
      this.paises= [];
    })
    
  }

  sugerencias(termino:string){

  }

}
