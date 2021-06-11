import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  utilisateurUrl: string = "http://localhost:9093/api/utilisateurs";
  //definir url chemin 'coursier'

  constructor(private httpClient: HttpClient) { } //definition httpclient nom de coursier
  getAllUtilisateur() {

    return this.httpClient.get(this.utilisateurUrl);
  }
  getUtilisateurById(id) {

    return this.httpClient.get(`${this.utilisateurUrl}/${id}`);

  }
  addUtilisateur(utilisateur:any) {
    return this.httpClient.post(this.utilisateurUrl, utilisateur);//post to add

  }
  updateUtilisateur(utilisateur: any ) { //with edit
    return this.httpClient.put(this.utilisateurUrl, utilisateur)  

  }
  deleteUtilisateur(id:any) {
    return this.httpClient.delete(`${this.utilisateurUrl}/${id}`);
  }
  searchByUser(user: string) {
    return this.httpClient.get(`${this.utilisateurUrl}/search/${user}`);
    // return this.httpClient.get(`${this.utilisateurUrl}/search`,team);

  }
   

}
