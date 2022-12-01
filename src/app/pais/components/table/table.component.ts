import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/searchResponse.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() countries:Country[] = [];

}
