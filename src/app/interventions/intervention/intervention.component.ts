import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/service/client.service';
import { InterventionService } from 'src/app/service/intervention.service';
import { MarqueService } from 'src/app/service/marque.service';
import { TypematerielService } from 'src/app/service/typemateriel.service';


@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent implements OnInit {
  
   
  public addInterventionsForm: FormGroup;
  public submitted = false;

  public idDelete: any = 0;
  public idEdit: any = 0;
  public index: number;
  public interventions: any;
  public id: any;
  public action: string;
 // public intervention: any;
  public marque: any;
  public typemateriel: any;
  public client: any;
  totalLength:any;
  page:number=1;
  result:any;
 public dateajout = Date.now();
 public dataEdit: any
  
  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private marqueService: MarqueService,
    private typematerielService: TypematerielService,
    private interventionService :InterventionService,
    private clientService :ClientService) { }


  ngOnInit(): void {
    this.initForm();
    this.getinterventionsFromService();
    this.typematerielService.getAllTypemateriel().subscribe((data) => this.typemateriel = data);
    this.marqueService.getAllMarque().subscribe((data) => this.marque = data);
    this.clientService.getAllClient().subscribe((data) => this.client = data);
  }

  private getinterventionsFromService() {
    this.interventionService.getAllIntervention().subscribe((data) => {
      this.interventions = data
      for (let i=0; i<this.interventions.length; i++) {
        this.interventions[i].dateajout = new Date(this.interventions[i].dateajout).toLocaleString()
      }
    });
  }

  public addIntervention() {
    this.submitted = true;
    if (this.addInterventionsForm.valid) {
      let intervention = this.addInterventionsForm.value;
      this.interventionService.addIntervention(intervention).subscribe((data) => {
          console.log(intervention)
          this.getinterventionsFromService();
          document.getElementById("close-add-modal").click();
          this.toastr.success('Intervention ajouté avec succés');
          this.addInterventionsForm.reset();
        }
      )
    }
  }

  public openPopup() {
    this.action = "new";
  }

  // copy des données à modifer dans le form du modification
  public moveDataToModifForm(index: any) {
    this.action = "edit";
    //moveDataToModifForm
    let currentinterventions = this.interventions [index];
    this.idEdit = this.interventions [index].id;
    //  mettre les valeurs de l'objet < currentclient > dans les champs du formulaire edit 
    this.addInterventionsForm.patchValue(currentinterventions);
    this.dataEdit = this.addInterventionsForm.value
    console.log(this.dataEdit)
  }

  /* fonction click editclient */
  public editIntervention(){
    let intervention = this.addInterventionsForm.value;
    intervention.id = this.idEdit;
    this.interventionService.updateIntervention(intervention).subscribe((data) => {
          this.getinterventionsFromService();
          document.getElementById("close-add-modal").click();
          this.toastr.success('Intervention modifé avec succés');
          console.log( this.addInterventionsForm.value)
        }
      )
  }

  // Send ID to deleteForm 
  public moveIDToDeleteForm(index) {
    this.idDelete = this.interventions[index].id;
  }

  /* fonction click deleteclient */
  public deleteIntervention(id) {
    this.interventionService.deleteIntervention(id).subscribe((data) => {
          this.getinterventionsFromService();
          document.getElementById("close-delete-modal").click();
          this.toastr.success('intervention supprimé avec succés');
        }
      )
  }

 /* public search(customer) {
    this.materielsservice.searchByCustomer(customer).subscribe((data) => this.getinterventionsFromService());
    if (this.raisonsocial != "") {
    } else if (this.raisonsocial == "") {
      this.ngOnInit();
    }
    this.client = this.client.filter(res => {
      return res.raisonsocial.toLocaleLowerCase().match(this.raisonsocial.toLocaleLowerCase());
    });
  }*/

  public isElementNotValid(field: string): boolean {
    return this.addInterventionsForm.get(field) && !this.addInterventionsForm.get(field).hasError("required") && this.addInterventionsForm.get(field).invalid;
  }

  private initForm(): void {
    this.addInterventionsForm = this.fb.group({
      client: [null, [Validators.required]],
      typemateriel: [null, [Validators.required]],
      marque: [null, [Validators.required]],
      modele: [null, [Validators.required]],
      numserie: [null, [Validators.required]],
      affect: [null],
      panne: [null, [Validators.required]],
      etat: [null],
      dateajout: [Date.now()]
     
    })
  }

}