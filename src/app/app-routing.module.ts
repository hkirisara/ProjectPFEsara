import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffectationtechnicienComponent } from './interventions/affectationtechnicien/affectationtechnicien.component';
import { AjoutComponent } from './interventions/ajout/ajout.component';
import { ClientComponent } from './configuration/client/client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiagnosticComponent } from './interventions/diagnostic/diagnostic.component';
import { OffreComponent } from './finance/offre/offre.component';
import { InterventionComponent } from './interventions/intervention/intervention.component';
import { MaterielsComponent } from './configuration/materiels/materiels.component';
import { MarqueComponent } from './configuration/marque/marque.component';
import { MouvementComponent } from './interventions/mouvement/mouvement.component';
import { TypematerielComponent } from './configuration/typemateriel/typemateriel.component';
import { UtilisateurComponent } from './configuration/utilisateur/utilisateur.component';
import { BoncommandeComponent } from './finance/boncommande/boncommande.component';
import { StatisqueComponent } from './statisque/statisque.component';



const routes: Routes = [
  {path:'utilisateur',component: UtilisateurComponent},
  {path:'client',component: ClientComponent},
  {path:'typemateriel',component: TypematerielComponent},
  {path:'marque',component: MarqueComponent},
  {path:'materiels',component: MaterielsComponent}, 
  {path:'ajout',component: AjoutComponent},
  {path:'intervention',component: InterventionComponent},
  {path:'affectationtechnicien',component: AffectationtechnicienComponent},
  {path:'diagnostic',component: DiagnosticComponent},
  {path:'mouvement',component: MouvementComponent},
  {path:'offre',component: OffreComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'bondecommande',component: BoncommandeComponent},
  {path:'statistique',component: StatisqueComponent},


  
  
  


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
