import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MarqueService } from 'src/app/service/marque.service';
import { MaterielsService } from 'src/app/service/materiels.service';
import { TypematerielService } from 'src/app/service/typemateriel.service';


@Component({
  selector: 'app-materiels',
  templateUrl: './materiels.component.html',
  styleUrls: ['./materiels.component.css']
})
export class MaterielsComponent implements OnInit {

  public addMaterielsForm: FormGroup;
  public submitted = false;

  public idDelete: any = 0;
  public idEdit: any = 0;
  public index: number;
  public materiels: any;
  public id: any;
  public action: string;
  public typemateriel: any;
  public marque: any;
  public dataEdit: any

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private marqueService: MarqueService,
    private typematerielService: TypematerielService,
    private materielsservice: MaterielsService) { }
    totalLength:any;
    page:number=1;
    result:any;

  ngOnInit(): void {
    this.initForm();
    this.getmaterielsFromService();
    this.typematerielService.getAllTypemateriel().subscribe((data) => {
      this.typemateriel = data
    });
    this.marqueService.getAllMarque().subscribe((data) => {
      this.marque = data
    });
    
  }


  private getmaterielsFromService() {
    this.materielsservice.getAllMateriels().subscribe((data) => this.materiels = data);
  }

  public addMateriels() {
    this.submitted = true;
    if (this.addMaterielsForm.valid) {
      let materiel = this.addMaterielsForm.value;
      this.materielsservice.addMateriels(materiel).subscribe((data) => {
          this.getmaterielsFromService();
          this.addMaterielsForm.reset();
          document.getElementById("close-add-modal").click();
          this.toastr.success('Materiels ajouté avec succés');
          this.addMaterielsForm.reset();
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
    let currentmateriels = this.materiels[index];
    this.idEdit = this.materiels[index].id;
    //  mettre les valeurs de l'objet < currentclient > dans les champs du formulaire edit 
    this.addMaterielsForm.patchValue(currentmateriels);
    this.dataEdit = this.addMaterielsForm.value
    console.log(this.dataEdit)
  }

  /* fonction click editclient */
  public editMateriels() {
    let materiel = this.addMaterielsForm.value;
    materiel.id = this.idEdit;
    this.materielsservice.updateMateriels(materiel).subscribe((data) => {
          this.getmaterielsFromService();
          document.getElementById("close-add-modal").click();
          this.toastr.success('Materiels modifé avec succés');
          console.log( this.addMaterielsForm.value)
        }
      )
  }

  // Send ID to deleteForm 
  public moveIDToDeleteForm(index) {
    this.idDelete = this.materiels[index].id;
  }

  /* fonction click deleteclient */
  public deleteMateriels(id) {
    this.materielsservice.deleteMateriels(id).subscribe((data) => {
          this.getmaterielsFromService();
          document.getElementById("close-delete-modal").click();
          this.toastr.success('materiels supprimé avec succés');
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
    return this.addMaterielsForm.get(field) && !this.addMaterielsForm.get(field).hasError("required") && this.addMaterielsForm.get(field).invalid;
  }

  private initForm(): void {
    this.addMaterielsForm = this.fb.group({
      typemateriel: [null, [Validators.required]],
      marque: [null, [Validators.required]],
      model: [null, [Validators.required]]
     
    })
  }

}