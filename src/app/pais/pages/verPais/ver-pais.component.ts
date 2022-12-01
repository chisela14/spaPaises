import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/searchResponse.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private paisService: PaisService) {
    console.log(route.snapshot.params['id']);
  }

  code:string = "";
  country!:Country;

  ngOnInit(): void {
    this.code = this.route.snapshot.params['id']; //tiene el nombre id porque así se ha puesto en el fichero de rutas
    this.paisService.searchCountry(this.code)
    .subscribe({
      next: (resp)=> {this.country=resp[0]},
      error: (error) => console.log(error)
    })
  }

}
