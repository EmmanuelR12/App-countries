import { Component, Output, EventEmitter,OnInit, Input} from '@angular/core';
import {debounceTime, Subject} from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() OnDebunce:EventEmitter<string>= new EventEmitter();
  @Input() placeholder:string ='' 


  debounce: Subject<string> = new Subject();

  termino:string=''

  ngOnInit(): void {
    this.debounce
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor =>{
      this.OnDebunce.emit(valor);
    })
  }
  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPrecionada(){
    this.debounce.next(this.termino);
  }

}
