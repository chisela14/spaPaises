import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/searchResponse.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url:string = "https://restcountries.com/v3.1/";

  public results:Country[] = [];

  constructor(private http:HttpClient) { }

  searchCountries(query:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.url}name/${query}`)
    // .subscribe((resp)=> this.results=resp)
  }

  searchCountry(code:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.url}alpha/${code}`)
  }

  searchCapital(query:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.url}capital/${query}`)
  }
  

}
