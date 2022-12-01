import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/searchResponse.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {

  error:boolean=false;
  textError:string="";
  results:Country[]=[];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }
  
  searchCapital(query:string){
    this.textError = query
    this.paisService.searchCapital(query)
    .subscribe({
      next:(resp)=>{
        this.results = resp
        this.error = false;
      },
      error: (error)=>{
        this.error = true
        this.results=[]
      }
    })
  }

}
