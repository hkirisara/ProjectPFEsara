import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {
  diagnosticUrl: string = "http://localhost:9093/api/diagnostic";
  //definir url chemin 'coursier'

  constructor(private httpClient: HttpClient) { } //definition httpclient nom de coursier
  getAllDiagnostic() {

    return this.httpClient.get(this.diagnosticUrl);
  }
  getDiagnosticById(id:any) {

    return this.httpClient.get(`${this.diagnosticUrl}/${id}`);

  }
  getDiagnosticByInterventionId(InterventionId:string) {

    return this.httpClient.get(`${this.diagnosticUrl}/intervention/${InterventionId}`);

  }
  addDiagnostic(interventionId: string, diagnostic: any) {
    return this.httpClient.post(`${this.diagnosticUrl}/${interventionId}`, diagnostic);

  }
  updateDiagnostic(diagnostic: any ) { 
  
    return this.httpClient.put(this.diagnosticUrl, diagnostic);

  }
  deleteDiagnostic(id: any) {
    return this.httpClient.delete(`${this.diagnosticUrl}/${id}`);
  }
  searchByDiagnostic(diagnostic: string) {
    return this.httpClient.get(`${this.diagnosticUrl}/search/${diagnostic}`);
    // return this.httpClient.get(`${this.utilisateurUrl}/search`,team);

  }


}
