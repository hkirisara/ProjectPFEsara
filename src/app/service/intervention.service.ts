import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {


  interventionUrl: string = "http://localhost:9093/api/intervention";
  //definir url chemin 'coursier'

  constructor(private httpClient: HttpClient) { } //definition httpclient nom de coursier
  getAllIntervention() {

    return this.httpClient.get(this.interventionUrl);
  }
  getAllInterventionprocessed() {

    return this.httpClient.get(this.interventionUrl+"/processed");
  }
  getAllInterventionprocessedByClient(id) {

    return this.httpClient.get(this.interventionUrl+"/processed/"+id);
  }
  findAddedIntervention() {

    return this.httpClient.get(this.interventionUrl + "/added");
  }
  findAddeddIntervention() {

    return this.httpClient.get(this.interventionUrl + "/addedd");
  }
  getInterventionById(id) {

    return this.httpClient.get(`${this.interventionUrl}/${id}`);

  }
  addIntervention(interventions: any) {

    console.log("je suis la");
    return this.httpClient.post(this.interventionUrl, interventions);//post to add

  }
  updateIntervention(interventions: any) { //with edit
    return this.httpClient.put(this.interventionUrl, interventions)

  }
  deleteIntervention(id: any) {
    return this.httpClient.delete(`${this.interventionUrl}/${id}`);
  }
  searchByIntervention(intervention: string) {
    return this.httpClient.get(`${this.interventionUrl}/search/${intervention}`);
    // return this.httpClient.get(`${this.interventionUrl}/search`,team);

  }

  getInterInDiag(){
    return this.httpClient.get(`${this.interventionUrl}`)
  }


}
