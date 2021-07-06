import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  factureUrl: string = "http://localhost:9093/api/facture";
  //definir url chemin 'coursier'

  constructor(private httpClient: HttpClient) { } //definition httpclient nom de coursier
  getAllFacture() {

    return this.httpClient.get(this.factureUrl);
  }
   getFactureById(id:any) {

    return this.httpClient.get(`${this.factureUrl}/${id}`);

  }
  addFacture(facture: any) {
    return this.httpClient.post(this.factureUrl, facture);

  }
  updateFacture(facture: any ) { 
    
    return this.httpClient.put(this.factureUrl, facture)

  }
  deleteFacture(id: any) {
    return this.httpClient.delete(`${this.factureUrl}/${id}`);
  }
  searchByFacture(facture: string) {
    return this.httpClient.get(`${this.factureUrl}/search/${facture}`);
    

  }

  getFactureByInterventionId(id: any) {
    return this.httpClient.get(`${this.factureUrl}/intervention/${id}`);
  }
}
