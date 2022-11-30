import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/searchResponse.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  query:string = "";
  results:Country[] = [];
  
  search(){
    this.results = this.paisService.searchCountries(this.query);
  }

}
