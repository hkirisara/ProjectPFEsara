import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { UtilisateurComponent } from './configuration/utilisateur/utilisateur.component';
import { TypematerielComponent } from './configuration/typemateriel/typemateriel.component';
import { MouvementComponent } from './interventions/mouvement/mouvement.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './configuration/client/client.component';
import { InterventionComponent } from './interventions/intervention/intervention.component';
import { MarqueComponent } from './configuration/marque/marque.component';
import { MaterielsComponent } from './configuration/materiels/materiels.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AffectationtechnicienComponent } from './interventions/affectationtechnicien/affectationtechnicien.component';
import { AjoutComponent } from './interventions/ajout/ajout.component';
import { DiagnosticComponent } from './interventions/diagnostic/diagnostic.component';
import { DatePipe } from '@angular/common';
import { OffreComponent } from './finance/offre/offre.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpIntercepterJwtAuthServiceService} from './service/http-intercepter-jwt-auth-service.service';
import { LoginComponent } from './components/login/login.component';
import { BoncommandeComponent } from './finance/boncommande/boncommande.component';
import { BonlivraisonComponent } from './finance/bonlivraison/bonlivraison.component';

import { SuivimaterielComponent } from './dash/suivimateriel/suivimateriel.component';











@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UtilisateurComponent,
    TypematerielComponent,
    MouvementComponent,
    ClientComponent,
    InterventionComponent,
    MarqueComponent,
    MaterielsComponent,
    AffectationtechnicienComponent,
    AjoutComponent,
    DiagnosticComponent,
    OffreComponent,
    TestComponent,
    DashboardComponent,
    LoginComponent,
    BoncommandeComponent,
    BonlivraisonComponent,
   
    SuivimaterielComponent,
   
  
    
   
    
    
    

    
    



  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //InMemoryWebApiModule.forRoot(DataService),
    ToastrModule.forRoot(),
    HttpClientModule,
    NgxPaginationModule,
    
   
  ],
  providers: [ {provide:HTTP_INTERCEPTORS,useClass:HttpIntercepterJwtAuthServiceService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
