import { Component, OnInit } from '@angular/core';
import {PaisService} from '../../services/pais.service';

import {Country} from '../../interfaces/pais.interface';
@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent  {

  regiones:string[] = [
    'eu',
    'efta',
    'caricom',
    'pa',
    'au', 
    'usan',
    'eeu',
    'al',
    'asean',
    'cais',
    'cefta',
    'nafta',
    'saarc',
  ]
  regionActiva:string = '';
  continent:Country[]=[];
  hayError:boolean=false;

  constructor( private servicePais:PaisService ) { }
  actiarRegion(region:string){
    if (region === this.regionActiva) {
    return;	
    }
    this.regionActiva = region;
    this.continent = [];
    this.servicePais.buscarRegion(this.regionActiva)
    .subscribe((res) =>{this.continent= res;})
  }
  
  getClaseCss(region:string):string  {
  	return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  
}
