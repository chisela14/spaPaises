import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/porCapital/por-capital.component';
import { PorPaisComponent } from './pages/porPais/por-pais.component';
import { PorRegionComponent } from './pages/porRegion/por-region.component';
import { VerPaisComponent } from './pages/verPais/ver-pais.component';
import { PaisService } from './services/pais.service';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    SearchComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers:[
    PaisService
  ]
})
export class PaisModule { }
