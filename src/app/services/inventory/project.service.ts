import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyCnameRecord } from 'dns';
import { AutocompleteOptionGroups } from 'src/app/models/inventory/AutocompleteOptionGroups';
import { Pos } from 'src/app/models/inventory/Pos';
import { Price } from 'src/app/models/inventory/Price';
import { Sap } from 'src/app/models/inventory/Sap';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
 
  readonly projectURL = 'http://localhost:5000/api/sap/';
 
 
 
  getAllProjectUnderClient() {
    return this.http.get<[]>(this.projectURL + "allsales");
  }
  // getProducts() {
  //   return this.http.get<Sap[]>(this.sapURL + "availability");
  // }
}
