import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  query:string = "";
  @Output()onSearch:EventEmitter<string> = new EventEmitter();
  
  search(){
    this.onSearch.emit(this.query);
  }

}
