import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { TypematerielComponent } from './pages/typemateriel/typemateriel.component';
import { MouvementComponent } from './pages/mouvement/mouvement.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { InterventionComponent } from './intervention/intervention.component';
import { MarqueComponent } from './pages/marque/marque.component';
import { MaterielsComponent } from './materiels/materiels.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AffectationtechnicienComponent } from './affectationtechnicien/affectationtechnicien.component';
import { AjoutComponent } from './ajout/ajout.component';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { DatePipe } from '@angular/common';
import { OffreComponent } from './finance/offre/offre.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';










@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ConfigurationComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
