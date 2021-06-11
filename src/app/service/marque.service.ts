import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  marqueUrl: string = "http://localhost:9093/api/marque";
  //definir url chemin 'coursier'

  constructor(private httpClient: HttpClient) { } //definition httpclient nom de coursier
  getAllMarque() {

    return this.httpClient.get(this.marqueUrl);
  }
  getMarqueById(id:any) {

    return this.httpClient.get(`${this.marqueUrl}/${id}`);

  }
  addMarque(marque: any) {
    return this.httpClient.post(this.marqueUrl, marque);//post tzid biha 

  }
  updateMarque(marque: any ) { // m3aha edit
  
    return this.httpClient.put(this.marqueUrl, marque);

  }
  deleteMarque(id: any) {
    return this.httpClient.delete(`${this.marqueUrl}/${id}`);
  }
  searchByMark(mark: string) {
    return this.httpClient.get(`${this.marqueUrl}/search/${mark}`);
    // return this.httpClient.get(`${this.utilisateurUrl}/search`,team);

  }

}
