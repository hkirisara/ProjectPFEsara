import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypematerielService {

  typematerielUrl: string = "http://localhost:9093/api/typemateriel";
  //definir url chemin 'coursier'

  constructor(private httpClient: HttpClient) { } //definition httpclient nom de coursier
  getAllTypemateriel() {

    return this.httpClient.get(this.typematerielUrl);
  }
  getTypematerielById(id:any) {

    return this.httpClient.get(`${this.typematerielUrl}/${id}`);

  }
  addTypemateriel(typemateriel: any) {
    return this.httpClient.post(this.typematerielUrl, typemateriel);//post tzid biha 

  }
  updateTypemateriel(typemateriel: any ) { // m3aha edit
  

    return this.httpClient.put(this.typematerielUrl, typemateriel);

  }
  deleteTypemateriel(id: any) {
    return this.httpClient.delete(`${this.typematerielUrl}/${id}`);
  }
  searchByType(type: string) {
    return this.httpClient.get(`${this.typematerielUrl}/search/${type}`);
    // return this.httpClient.get(`${this.utilisateurUrl}/search`,team);

  }

}
