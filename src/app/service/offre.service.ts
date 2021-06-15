import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  offreUrl: string = "http://localhost:9093/api/offre";
  //definir url chemin 'coursier'

  constructor(private httpClient: HttpClient) { } //definition httpclient nom de coursier
  getAllOffre() {

    return this.httpClient.get(this.offreUrl);
  }
   getOffreById(id:any) {

    return this.httpClient.get(`${this.offreUrl}/${id}`);

  }
  addOffre(offre: any) {
    return this.httpClient.post(this.offreUrl, offre);

  }
  updateOffre(offre: any ) { 
    
    return this.httpClient.put(this.offreUrl, offre)

  }
  deleteOffre(id: any) {
    return this.httpClient.delete(`${this.offreUrl}/${id}`);
  }
  searchByOffre(offre: string) {
    return this.httpClient.get(`${this.offreUrl}/search/${offre}`);
    

  }

  getOffreByInterventionId(id: any) {
    return this.httpClient.get(`${this.offreUrl}/intervention/${id}`);
  }
}
