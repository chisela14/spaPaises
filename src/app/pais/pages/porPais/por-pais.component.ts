import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/searchResponse.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {
  error:boolean=false;
  textError:string="";
  results:Country[]=[]

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    
  }
  
  searchCountries(query:string){
    this.textError = query
    this.paisService.searchCountries(query)
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
