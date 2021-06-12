import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/service/client.service';
import { InterventionService } from 'src/app/service/intervention.service';
import { MarqueService } from 'src/app/service/marque.service';
import { MaterielsService } from 'src/app/service/materiels.service';
import { TypematerielService } from 'src/app/service/typemateriel.service';


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  public addInterventionsForm: FormGroup;
  public submitted = false;

  public idDelete: any = 0;
  public idEdit: any = 0;
  public index: number;
  public interventions: any;
  public id: any;
  public action: string;
  public intervention: any;
  public marque: any;
  public typemateriel: any;
  public client: any;
  public p: number;
  public idType :any;
  public idMarque :any;
  public idModel :any;
  public dateajout= Date.now();

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private marqueService: MarqueService,
    private typematerielService: TypematerielService,
    private interventionService :InterventionService,
    private clientService :ClientService,
    private materielsService :MaterielsService,
    ) { }

  ngOnInit() {
    this.initForm();
    this.getinterventionsFromService();
    this.typematerielService.getAllTypemateriel().subscribe((data) => this.typemateriel = data);
    this.marqueService.getAllMarque().subscribe((data) => this.marque = data);
    this.clientService.getAllClient().subscribe((data) => this.client = data);
    this.materielsService.getMatrielByTypeAndMarqueAndModel(this.idType,this.idMarque,this.idModel)
  }
  private getinterventionsFromService() {
    this.interventionService.getAllIntervention().subscribe((data) =>{
     this.interventions = data
    for(let i=0; i<this.interventions.length; i++){
      this.interventions[i].dateajout = new Date(this.interventions[i].dateajout).toLocaleString()
    }
  });
}
  getMatrielByTypeAndMarqueAndModel(){
    this.materielsService.getMatrielByTypeAndMarqueAndModel(this.idType,this.idMarque,this.idModel)
  }

  public addIntervention() {
    this.submitted = true;
    if (this.addInterventionsForm.valid) {
      let intervention = this.addInterventionsForm.value;
      console.log(intervention)
      this.interventionService.addIntervention(intervention).subscribe((data) => {
        console.log(intervention)
          this.getinterventionsFromService();
          this.toastr.success('intervention ajouté avec succés');
          this.addInterventionsForm.reset()

        }
      )
    }
  }

  public openPopup() {
    this.action = "new";
  }
  
  public isElementNotValid(field: string): boolean {
    return this.addInterventionsForm.get(field) && !this.addInterventionsForm.get(field).hasError("required") && this.addInterventionsForm.get(field).invalid;
  }
  public onSelecteType(event) {
    console.log(this.addInterventionsForm.get('typemateriel').value);
    
    if(this.addInterventionsForm.get('typemateriel').value && this.addInterventionsForm.get('marque').value) {
      this.materielsService.getMatrielByTypeAndMarque(this.addInterventionsForm.get('typemateriel').value.id , this.addInterventionsForm.get('marque').value.id).subscribe((item: any) => {
        this.addInterventionsForm.get('modele').setValue(item.model);
      })
    }
  }

  public onSelecteMarque(event) {
    if(this.addInterventionsForm.get('typemateriel').value && this.addInterventionsForm.get('marque').value) {
      this.materielsService.getMatrielByTypeAndMarque(this.addInterventionsForm.get('typemateriel').value.id , this.addInterventionsForm.get('marque').value.id).subscribe((item: any) => {
        this.addInterventionsForm.get('modele').setValue(item.model);
      })
    }
  }
  
  private initForm(): void {
    this.addInterventionsForm = this.fb.group({
      client: [null],
      typemateriel: [null],
      marque: [null],
      modele: [null],
      numserie: [null],
      affect: [null],
      panne: [null],
      etat: [null],
      dateajout: [Date.now()],
     
    })
  }

}
