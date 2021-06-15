import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientUrl: string = "http://localhost:9093/api/client";
  //definir url chemin 'coursier'

  constructor(private httpClient: HttpClient) { } //definition httpclient nom de coursier
  getAllClient() {

    return this.httpClient.get(this.clientUrl);
  }
  getClientById(id:any) {

    return this.httpClient.get(`${this.clientUrl}/${id}`);

  }
  addClient(client: any) {
    return this.httpClient.post(this.clientUrl, client);//post tzid biha 

  }
  updateClient(client: any ) { // m3aha edit
    
    return this.httpClient.put(this.clientUrl, client)

  }
  deleteClient(id: any) {
    return this.httpClient.delete(`${this.clientUrl}/${id}`);
  }
  searchByCustomer(customer: string) {
    return this.httpClient.get(`${this.clientUrl}/search/${customer}`);
    // return this.httpClient.get(`${this.utilisateurUrl}/search`,team);

  }

  getAllClientBYInterventionHasDiagno() {
    return this.httpClient.get(`${this.clientUrl}/interventions/diagno`);
  }
}
