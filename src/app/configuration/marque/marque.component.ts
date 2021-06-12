import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MarqueService } from 'src/app/service/marque.service';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {

  public addMarqueForm: FormGroup;
  public submitted = false;

  public idDelete: any = 0;
  public idEdit: any = 0;
  public index: number;
  public marque: any;

  //user:any;
  public id: any;
 // public typemateriel: string;

  public action: string;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private marqueService: MarqueService) { }


  ngOnInit(): void {
    this.initForm();
    this.getmarqueFromService();
  }

  private getmarqueFromService() {
    this.marqueService.getAllMarque().subscribe((data) => this.marque = data);
  }

  public addMarque() {
    this.submitted = true;
    if (this.addMarqueForm.valid) {
      let marque = this.addMarqueForm.value;
      this.marqueService.addMarque(marque).subscribe((data) => {
          this.getmarqueFromService();
          document.getElementById("close-add-modal").click();
          this.toastr.success('Marque ajouté avec succés');
          this.addMarqueForm.reset();
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
    let currentmarque = this.marque[index];
    this.idEdit = this.marque[index].id;
    //  mettre les valeurs de l'objet < currentUtilisateur > dans les champs du formulaire edit 
    this.addMarqueForm.patchValue(currentmarque);
  }

  /* fonction click editUtilisateur */
  public editMarque() {
    let marque = this.addMarqueForm.value;
    marque.id = this.idEdit;
    this.marqueService.updateMarque(marque).subscribe((data) => {
          this.getmarqueFromService();
          document.getElementById("close-add-modal").click();
          this.toastr.success('marque modifé avec succés');
        }
      )
  }

  // Send ID to deleteForm 
  public moveIDToDeleteForm(index) {
    this.idDelete = this.marque[index].id;
  }

  /* fonction click deleteUtilisateur */
  public deleteMarque(id) {
    this.marqueService.deleteMarque(id).subscribe((data) => {
          this.getmarqueFromService();
          document.getElementById("close-delete-modal").click();
          this.toastr.success('Marque supprimé avec succés');
        }
      )
  }

  /*public search(type) {
    this.marqueService.searchByType(type).subscribe((data) => this.getmarqueFromService());
    if (this.typemateriel != "") {
    } else if (this.typemateriel == "") {
      this.ngOnInit();
    }
    this.typemateriel = this.typemateriel.filter(res => {
      return res.typemateriel.toLocaleLowerCase().match(this.typemateriel.toLocaleLowerCase());
    });
  }*/

  public isElementNotValid(field: string): boolean {
    return this.addMarqueForm.get(field) && !this.addMarqueForm.get(field).hasError("required") && this.addMarqueForm.get(field).invalid;
  }

  private initForm(): void {
    this.addMarqueForm = this.fb.group({
      
      marque: [null, [Validators.required]],
      
    })
  }

}
