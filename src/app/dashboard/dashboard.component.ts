import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DiagnosticService } from '../service/diagnostic.service';
import { InterventionService } from '../service/intervention.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
   public dateajout = Date.now();

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

    this.interventionService.getInterventionById(this.id).subscribe((data) =>{
      this.intervention = data
      for(let i=0; i<this.diagnostic.length; i++){
        this.diagnostic[i].datediagnostic = new Date(this.diagnostic[i].datediagnostic).toLocaleString()
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
        this.getdiagnosticFromService();
        document.getElementById("close-add-modal").click();
        this.toastr.success('Diagnostic ajouté avec succés');
        this.addDiagnosticForm.reset();
      }
      )
    }
  }
  
  public onNativeChange(event, data, elem) {
    if (event.target.checked) {
      this.array.push(data);
      this.interventionId = data.id;
    } else {
      this.array = this.array.filter(item => item.id !== data.id);
      
    }

    //console.log(event.target)

   /* let elems = Array.from(document.getElementsByClassName("ch-rd"))
    for(let i=0; i< elems.length; i++){

      elems[i].checked = false
    }*/

    this.interventionService.getInterventionById(data.id).subscribe((res)=>{
      this.mouvement = res
      
      this.mouvement.dateajout = new Date(this.mouvement.dateajout).toLocaleString()
      if( this.mouvement.datediagnostic != null){
        this.mouvement.datediagnostic = new Date(this.mouvement.datediagnostic).toLocaleString()
      }
      if( this.mouvement.dateOffre != null){
        this.mouvement.dateOffre = new Date(this.mouvement.dateOffre).toLocaleString()
      }
      console.log(res)
    })
    /*let res = []
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
        this.mouvement[0]["datediagnostic"] = this.diagnostics[0].datediagnostic
      }
      this.mouvement[0]["dateajout"] = this.intervention[0].dateajout
    }*/
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

  /*public checkAll(event) {
    this.array = [];
    if (event.target.checked) {
      this.checked = true;
      this.intervention.forEach(element => {
        this.array.push(element);
      });
    } else {
      this.checked = false;
    }
  }*/

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
    this.action = "edit";
    //moveDataToModifForm
    let currentdiagnostic = this.diagnostic[index];
    this.idEdit = this.diagnostic[index].id;
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
      dateajout: [Date.now()],
      diagnostic: [null, [Validators.required]],
      piecederechange: [null],
      nombredepiece: [null, [Validators.required]],





    })
  }
}
