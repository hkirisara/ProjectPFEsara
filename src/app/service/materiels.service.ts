import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterielsService {

  materielsUrl: string = "http://localhost:9093/api/materiel";
  //definir url chemin 'coursier'

  constructor(private httpClient: HttpClient) { } //definition httpclient nom de coursier
  getAllMateriels() {

    return this.httpClient.get(this.materielsUrl);
  }
  getMaterielsById(id:any) {

    return this.httpClient.get(`${this.materielsUrl}/${id}`);

  }
  getMatrielByTypeAndMarque(idType, idMarque) {
    return this.httpClient.get(`${this.materielsUrl}/${idType}/${idMarque}`);//post to add

  }
  getMatrielByTypeAndMarqueAndModel(idType, idMarque,idModel) {
    return this.httpClient.get(`${this.materielsUrl}/${idType}/${idMarque}/${idModel}`);//post to add

  }
  addMateriels(materiels: any ) {
  
    return this.httpClient.post(this.materielsUrl, materiels);//post tzid biha 

  }
  updateMateriels(materiels: any ) { // m3aha edit
   

    return this.httpClient.put(this.materielsUrl, materiels)

  }
  deleteMateriels(id: any) {
    return this.httpClient.delete(`${this.materielsUrl}/${id}`);
  }
  searchByMatriel(materiel: string) {
    return this.httpClient.get(`${this.materielsUrl}/search/${materiel}`);
    // return this.httpClient.get(`${this.utilisateurUrl}/search`,team);

  }

  getMatrielByType(id: any) {
    return this.httpClient.get(`${this.materielsUrl}/marque/${id}`);
  }

  getMatrielByMarque(id: any) {
    return this.httpClient.get(`${this.materielsUrl}/modele/${id}`);
  }
}
