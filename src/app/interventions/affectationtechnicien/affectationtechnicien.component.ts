import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AffectationService } from 'src/app/service/affectation.service';
import { InterventionService } from 'src/app/service/intervention.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';


@Component({
  selector: 'app-affectationtechnicien',
  templateUrl: './affectationtechnicien.component.html',
  styleUrls: ['./affectationtechnicien.component.css']
})
export class AffectationtechnicienComponent implements OnInit {
  public dateaffectation = Date.now();
  public addAffectationsForm: FormGroup;
  public submitted = false;

  public idDelete: any = 0;
  public idEdit: any = 0;
  public index: number;
  public affectation: any;
  public intervention: any;
  public id: any;
  public action: string;
  public certification: any;
  public utilisateur: any;
  public panne: any;
  public checked: boolean;
  value: any;
  totalLength: any;
  page: number = 1;
  result: any;

  public array: any[] = [];

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private interventionService: InterventionService,
    private utilisateurService: UtilisateurService,
    private affectationservice: AffectationService) { }

  ngOnInit() {
    this.initForm();
    this.getaffectationFromService();
  }
  private getaffectationFromService() {
    this.utilisateurService.getAllUtilisateur().subscribe((data: any[]) => {
      this.utilisateur = data.filter(item => item.role === "Ingénieur" || item.role === "Technicien");

      this.interventionService.getAllIntervention().subscribe((data) => {
        this.intervention = this.intiTable(data).filter(item => item.etat === "ajouté");
        for (let interventionKey in this.intervention) {
          console.log(interventionKey["affect"])
        }
      });
    })

  }
  /* private getaffectationFromService() {
     this.affectationservice.getAllAffectation().subscribe((data) => this.intiTable(data).filter(item => item.etat === "ajouté"));
   }*/

  private intiTable(data) {
    let result: any[] = [];
    if (data) {
      data.forEach(element => {
        //if (element.interventions) {
        //element.interventions.forEach(item => {
        result.push({
          id: element.id,
          raisonsocial: element.client.raisonsocial,
          typemateriel: element.typemateriel.typemateriel,
          marque: element.marque.marque,
          modele: element.modele,
          numserie: element.numserie,
          panne: element.panne,
          etat: element.etat,
          // technicien: element.utilisateur ? element.utilisateur.prenom + " " + element.utilisateur.nom : null
          technicien:element.affect
        });
        //});
        //}
      });
    }
    return result;
  }

  public addAffectation() {
    this.submitted = true;
    if (this.addAffectationsForm.valid && this.array) {
      let args = {
        userId: this.addAffectationsForm.get('technicien').value.id,
        affectationIds: this.array.map(item => item.id)
      }
      this.affectationservice.addAffectation(args).subscribe((data) => {
        //this.getaffectationFromService();
        // 
        console.log(data)
        document.getElementById("close-add-modal").click();
        this.toastr.success('affectation ajouté avec succés');
        /*let list = Array.from(document.getElementsByClassName("ch-inter"))
        for (let i = 0; i < list.length; i++) {
          if (list[i].checked == true) {
            for (let k = 0; k < this.intervention.length; k++) {
              if (this.intervention[k].id == list[i].value) {
                for (let j = 0; j < this.utilisateur.length; j++) {
                  if (this.utilisateur[j].id == this.addAffectationsForm.get('technicien').value.id) {
                    this.intervention[k].technicien = this.utilisateur[j]
                    list[i].checked = false
                  }
                }
              }
            }
          }
        }*/
        this.addAffectationsForm.reset();
      }
      )
    }
  }

  public onNativeChange(event, data) {
    if (event.target.checked) {
      this.array.push(data);
    } else {
      this.array = this.array.filter(item => item.id !== data.id);
    }
  }

  public checkAll(event) {
    this.array = [];
    if (event.target.checked) {
      this.checked = true;
      this.intervention.forEach(element => {
        this.array.push(element);
      });
    } else {
      this.checked = false;
    }
  }

  public openPopup() {
    this.action = "new";
  }
  // copy des données à modifer dans le form du modification
  public moveDataToModifForm(index: any) {
    this.action = "edit";
    //moveDataToModifForm
    let currentaffectation = this.affectation[index];
    this.idEdit = this.affectation[index].id;
    //  mettre les valeurs de l'objet < currentclient > dans les champs du formulaire edit 
    this.addAffectationsForm.patchValue(currentaffectation);
  }

  /* fonction click editclient */
  public editAffectation() {
    let affectation = this.addAffectationsForm.value;
    affectation.id = this.idEdit;
    this.affectationservice.updateAffectation(affectation).subscribe((data) => {
      this.getaffectationFromService();
      document.getElementById("close-add-modal").click();
      this.toastr.success('client modifé avec succés');
    }
    )
  }

  // Send ID to deleteForm 
  public moveIDToDeleteForm(index) {
    this.idDelete = this.affectation[index].id;
  }

  /* fonction click deleteclient */
  public deleteAffectation(id) {
    this.affectationservice.deleteAffectation(id).subscribe((data) => {
      this.getaffectationFromService();
      document.getElementById("close-delete-modal").click();
      this.toastr.success('affectation supprimé avec succés');
    }
    )
  }

  /* public search(customer) {
     this.materielsservice.searchByCustomer(customer).subscribe((data) => this.getmaterielsFromService());
     if (this.raisonsocial != "") {
     } else if (this.raisonsocial == "") {
       this.ngOnInit();
     }
     this.client = this.client.filter(res => {
       return res.raisonsocial.toLocaleLowerCase().match(this.raisonsocial.toLocaleLowerCase());
     });
   }*/

  public isElementNotValid(field: string): boolean {
    return this.addAffectationsForm.get(field) && !this.addAffectationsForm.get(field).hasError("required") && this.addAffectationsForm.get(field).invalid;
  }

  private initForm(): void {
    this.addAffectationsForm = this.fb.group({
      technicien: [null, [Validators.required]]
    })
  }
}
