import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  livraisonUrl: string = "http://localhost:9093/api/livraison";
  //definir url chemin 'coursier'

  constructor(private httpClient: HttpClient) { } //definition httpclient nom de coursier
  getAllLivraison() {

    return this.httpClient.get(this.livraisonUrl);
  }
   getLivraisonById(id:any) {

    return this.httpClient.get(`${this.livraisonUrl}/${id}`);

  }
  addLivraison(livraison: any) {
    return this.httpClient.post(this.livraisonUrl, livraison);

  }
  updateLivraison(livraison: any ) { 
    
    return this.httpClient.put(this.livraisonUrl, livraison)

  }
  deleteLivraison(id: any) {
    return this.httpClient.delete(`${this.livraisonUrl}/${id}`);
  }
  searchByLivraison(livraison: string) {
    return this.httpClient.get(`${this.livraisonUrl}/search/${livraison}`);
    

  }

  getOffreByInterventionId(id: any) {
    return this.httpClient.get(`${this.livraisonUrl}/intervention/${id}`);
  }
}
