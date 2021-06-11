import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffectationtechnicienComponent } from './affectationtechnicien/affectationtechnicien.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ClientComponent } from './client/client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { OffreComponent } from './finance/offre/offre.component';
import { InterventionComponent } from './intervention/intervention.component';
import { MaterielsComponent } from './materiels/materiels.component';
import { MarqueComponent } from './pages/marque/marque.component';
import { MouvementComponent } from './pages/mouvement/mouvement.component';
import { TypematerielComponent } from './pages/typemateriel/typemateriel.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';



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

  
  
  


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
