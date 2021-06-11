import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TypematerielService } from 'src/app/service/typemateriel.service';

@Component({
  selector: 'app-typemateriel',
  templateUrl: './typemateriel.component.html',
  styleUrls: ['./typemateriel.component.css']
})
export class TypematerielComponent implements OnInit {


  public addTypematerielForm: FormGroup;
  public submitted = false;

  public idDelete: any = 0;
  public idEdit: any = 0;
  public index: number;
  public typemateriel: any;

  //user:any;
  public id: any;
 // public typemateriel: string;

  public action: string;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private typematerielService: TypematerielService) { }


  ngOnInit(): void {
    this.initForm();
    this.gettypematerielFromService();
  }

  private gettypematerielFromService() {
    this.typematerielService.getAllTypemateriel().subscribe((data) => this.typemateriel = data);
  }

  public addTypemateriel() {
    this.submitted = true;
    if (this.addTypematerielForm.valid) {
      let typemateriel = this.addTypematerielForm.value;
      this.typematerielService.addTypemateriel(typemateriel).subscribe((data) => {
          this.gettypematerielFromService();
          document.getElementById("close-add-modal").click();
          this.toastr.success('Type materiel ajouté avec succés');
          this.addTypematerielForm.reset();
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
    let currenttypemateriel = this.typemateriel[index];
    this.idEdit = this.typemateriel[index].id;
    //  mettre les valeurs de l'objet < currentUtilisateur > dans les champs du formulaire edit 
    this.addTypematerielForm.patchValue(currenttypemateriel);
  }

  /* fonction click editUtilisateur */
  public editTypemateriel() {
    let typemateriel = this.addTypematerielForm.value;
    typemateriel.id = this.idEdit;
    this.typematerielService.updateTypemateriel(typemateriel).subscribe((data) => {
          this.gettypematerielFromService();
          document.getElementById("close-add-modal").click();
          this.toastr.success('Type materiel modifé avec succés');
        }
      )
  }

  // Send ID to deleteForm 
  public moveIDToDeleteForm(index) {
    this.idDelete = this.typemateriel[index].id;
  }

  /* fonction click deleteUtilisateur */
  public deleteTypemateriel(id) {
    this.typematerielService.deleteTypemateriel(id).subscribe((data) => {
          this.gettypematerielFromService();
          document.getElementById("close-delete-modal").click();
          this.toastr.success('Type materiel supprimé avec succés');
        }
      )
  }

  /*public search(type) {
    this.typematerielService.searchByType(type).subscribe((data) => this.gettypematerielFromService());
    if (this.typemateriel != "") {
    } else if (this.typemateriel == "") {
      this.ngOnInit();
    }
    this.typemateriel = this.typemateriel.filter(res => {
      return res.typemateriel.toLocaleLowerCase().match(this.typemateriel.toLocaleLowerCase());
    });
  }*/

  public isElementNotValid(field: string): boolean {
    return this.addTypematerielForm.get(field) && !this.addTypematerielForm.get(field).hasError("required") && this.addTypematerielForm.get(field).invalid;
  }

  private initForm(): void {
    this.addTypematerielForm = this.fb.group({
      
      typemateriel: [null, [Validators.required]],
      
    })
  }

}
