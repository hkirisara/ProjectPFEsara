import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  affectationUrl: string = "http://localhost:9093/api/affectation";
  //definir url chemin 'coursier'

  constructor(private httpClient: HttpClient) { } //definition httpclient nom de coursier
  getAllAffectation() {

    return this.httpClient.get(this.affectationUrl);
  }
  getAffectationById(id:any) {

    return this.httpClient.get(`${this.affectationUrl}/${id}`);

  }
  addAffectation(affectation: any) {
    return this.httpClient.post(this.affectationUrl, affectation);

  }
  updateAffectation(affectation: any ) { 
  
    return this.httpClient.put(this.affectationUrl, affectation);

  }
  deleteAffectation(id: any) {
    return this.httpClient.delete(`${this.affectationUrl}/${id}`);
  }
  searchByAffectation(affectation: string) {
    return this.httpClient.get(`${this.affectationUrl}/search/${affectation}`);
    // return this.httpClient.get(`${this.utilisateurUrl}/search`,team);

  }

}
