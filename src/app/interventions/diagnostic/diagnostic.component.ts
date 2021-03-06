

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DiagnosticService } from 'src/app/service/diagnostic.service';
import { InterventionService } from 'src/app/service/intervention.service';


@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})
export class DiagnosticComponent implements OnInit {
  public addDiagnosticForm: FormGroup;
  public submitted = false;

  public idDelete: any = 0;
  public idEdit: any = 0;
  public index: number;
  public diagnostics = null;
  public diagnostic: any;
  public mouvement : any = null;
  public affectation: any;
  public utilisateur: any;
  public intervention: any;
  public id: any;
  public action: string;
  public prenom: any;
  public nom: any;
  public checked: boolean ;
  //public checkedDiac: boolean = false;
  //public checkedMvmt : boolean = false;
  public array: any[] = [];
  public arrayDiac: any[] = [];
  public arrayMvmt: any[] = [];
  public interventionId: any;
  totalLength:any;
    page:number=1;
    result:any;
   public datediagnostic = Date.now();

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private diagnosticService: DiagnosticService,
    private interventionService: InterventionService,
  ) { }

  ngOnInit() {
    this.initForm();
    this.getdiagnosticFromService();
  }
  private getdiagnosticFromService() {
    this.diagnosticService.getAllDiagnostic().subscribe((data) =>{
      this.diagnostic = data
      for(let i=0; i<this.diagnostic.length; i++){
        this.diagnostic[i].datediagnostic = new Date(this.diagnostic[i].datediagnostic).toLocaleString()
      }
    });
    
    /*this.diagnosticService.getDiagnosticByInterventionId(this.interventionId)*/
    this.interventionService.getAllIntervention().subscribe((data) => {
      this.intervention = this.intiTable(data).filter(item => item.etat === "ajouté");
      for (let i=0; i<this.intervention.length; i++) {
        this.intervention[i].dateajout = new Date(this.intervention[i].dateajout).toLocaleString()
      }
    });
  }

  
  private intiTable(data) {
    let result: any[] = [];
    if (data) {

      data.forEach(item => {
        result.push({
          id: item.id,
          raisonsocial: item.client.raisonsocial,
          dateajout: item.dateajout,
          typemateriel: item.typemateriel.typemateriel,
          marque: item.marque.marque,
          modele: item.modele,
          numserie: item.numserie,
          panne: item.panne,
          etat: item.etat
        });
      });
    }
    return result;
  }
  public addDiagnostic() {
    this.submitted = true;
    if (this.addDiagnosticForm.valid) {
      let diagnostic = this.addDiagnosticForm.value;
      this.diagnosticService.addDiagnostic(this.interventionId, diagnostic).subscribe((data) => {
        console.log(data)
        document.getElementById("close-add-modal").click();
        this.toastr.success('Diagnostic ajouté avec succés');
        
        this.addDiagnosticForm.reset();
        diagnostic.datediagnostic = new Date(diagnostic.datediagnostic).toLocaleString()
        diagnostic["id"] = data["id"]
        this.diagnostics.push(diagnostic)
        this.addDiagnosticForm.reset();
        
      })
    }
  }
  
  public onNativeChange(event, data) {
    if (event.target.checked) {
      this.array.push(data);
      this.interventionId = data.id;
    } else {
      this.array = this.array.filter(item => item.id !== data.id);
      
    }
     /*let Element  = Array.from(document.getElementsByClassName("diag"))
    for(let i=0; i< Element .length; i++){
       Element [i].checked = false
     }*/
    let res = []
    this.diagnostics = null
    let item = null
    this.diagnostic.forEach((element: any) => {
      if(element.intervention!= null){
        if(element.intervention.id == data.id){
          res.push(element)
        }
      }
    });
    this.diagnostics = res
    this.mouvement = []
    if(this.diagnostics.length<2){
      this.mouvement[0]={}
      if(this.diagnostics.length==1){
        this.mouvement = this.diagnostics
        this.mouvement[0]["date_diagno"] = this.diagnostics[0].datediagnostic
      }
      this.mouvement[0]["date_interv"] = data.date
    }
    return
  }

  /*public onNativeChangeDiac(event, data) {
    if (event.target.checked) {
      this.arrayDiac.push(data);
      this.interventionId = data.id;
    } else {
      this.arrayDiac = this.arrayDiac.filter(item => item.id !== data.id);
    }
  }
  /*public onNativeChangeMvmt(event, data) {
    if (event.target.checked) {
      this.arrayMvmt.push(data);
      this.interventionId = data.id;
    } else {
      this.arrayMvmt = this.arrayMvmt.filter(item => item.id !== data.id);
    }
  }*/

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

  /*public checkAllDiac(event) {
    this.arrayDiac = [];
    if (event.target.checked) {
      this.checkedDiac = true;
      this.diagnostic.forEach(element => {
        this.arrayDiac.push(element);
      });
    } else {
      this.checkedDiac = false;
    }
  }
 /* public checkAllMvmt(event) {
    this.arrayMvmt = [];
    if (event.target.checked) {
      this.checkedMvmt = true;
      this.mouvement.forEach(element => {
        this.arrayMvmt.push(element);
      });
    } else {
      this.checkedMvmt = false;
    }
  }*/

  public openPopup() {
    this.action = "new";
  }
  // copy des données à modifer dans le form du modification
  public moveDataToModifForm(index: any) {
    console.log(index)
    this.action = "edit";
    //moveDataToModifForm
    let currentdiagnostic = this.diagnostics[index];
    this.idEdit = this.diagnostics[index].id;
    //  mettre les valeurs de l'objet < currentclient > dans les champs du formulaire edit 
    this.addDiagnosticForm.patchValue(currentdiagnostic);
  }

  /* fonction click editclient */
  public editDiagnostic() {
    let diagnostic = this.addDiagnosticForm.value;
    diagnostic.id = this.idEdit;
    this.diagnosticService.updateDiagnostic(diagnostic).subscribe((data) => {
      this.getdiagnosticFromService();
      document.getElementById("close-add-modal").click();
      this.toastr.success('Diagnostic modifé avec succés');
    }
    )
  }

  // Send ID to deleteForm 
  public moveIDToDeleteForm(index) {
    this.idDelete = this.diagnostic[index].id;
  }

  /* fonction click deleteclient */
  public deleteDiagnostic(id) {
    this.diagnosticService.deleteDiagnostic(id).subscribe((data) => {
      this.getdiagnosticFromService();
      document.getElementById("close-delete-modal").click();
      this.toastr.success('Diagnostic supprimé avec succés');
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
    return this.addDiagnosticForm.get(field) && !this.addDiagnosticForm.get(field).hasError("required") && this.addDiagnosticForm.get(field).invalid;
  }

  private initForm(): void {
    this.addDiagnosticForm = this.fb.group({
      datediagnostic: [Date.now()],
      diagnostic: [null, [Validators.required]],
      piecederechange: [null],
      nombredepiece: [null, [Validators.required]],





    })
  }
}
