import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuiviService {

  suiviUrl: string = "http://localhost:9093/api/suivi";
  //definir url chemin 'coursier'

  constructor(private httpClient: HttpClient) { } //definition httpclient nom de coursier
  getAllSuivi() {

    return this.httpClient.get(this.suiviUrl);
  }
   getSuiviById(id:any) {

    return this.httpClient.get(`${this.suiviUrl}/${id}`);

  }
  addSuivi(suivi: any) {
    return this.httpClient.post(this.suiviUrl, suivi);

  }
  updateSuivi(suivi: any ) { 
    
    return this.httpClient.put(this.suiviUrl, suivi)

  }
  deleteSuivi(id: any) {
    return this.httpClient.delete(`${this.suiviUrl}/${id}`);
  }
  searchBySuivi(suivi: string) {
    return this.httpClient.get(`${this.suiviUrl}/search/${suivi}`);
    

  }
}
