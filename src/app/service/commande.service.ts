import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  commandeUrl: string = "http://localhost:9093/api/commande";
  //definir url chemin 'coursier'

  constructor(private httpClient: HttpClient) { } //definition httpclient nom de coursier
  getAllCommande() {

    return this.httpClient.get(this.commandeUrl);
  }
   getCommandeById(id:any) {

    return this.httpClient.get(`${this.commandeUrl}/${id}`);

  }
  addCommande(interventionId: string, commande: any) {
    return this.httpClient.post(`${this.commandeUrl}/${interventionId}`, commande);

  }
  updateCommande(commande: any ) { 
    
    return this.httpClient.put(this.commandeUrl, commande)

  }
  deleteCommande(id: any) {
    return this.httpClient.delete(`${this.commandeUrl}/${id}`);
  }
  searchByCommande(commande: string) {
    return this.httpClient.get(`${this.commandeUrl}/search/${commande}`);
    

  }

}
