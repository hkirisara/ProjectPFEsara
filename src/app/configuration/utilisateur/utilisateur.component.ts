import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  public addUtilisateurForm: FormGroup;
  public submitted = false;

  public idDelete: any = 0;
  public idEdit: any = 0;
  public index: number;
  public utilisateur: any;
  

  //user:any;
  public id: any;
  public prenom: string;

  public action: string;
  totalLength:any;
  page:number=1;
  result:any;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private utilisateurService: UtilisateurService) { }


  ngOnInit(): void {
    this.initForm();
    this.getutilisateurFromService();
  }

  private getutilisateurFromService() {
    this.utilisateurService.getAllUtilisateur().subscribe((data) => this.utilisateur = data);
  }

  public addUtilisateur() {
    this.submitted = true;
    if (this.addUtilisateurForm.valid) {
      let utilisateur = this.addUtilisateurForm.value;
      this.utilisateurService.addUtilisateur(utilisateur).subscribe((data) => {
          this.getutilisateurFromService();
          this.addUtilisateurForm.reset();
          document.getElementById("close-add-modal").click();
          this.toastr.success('Utilisateur ajouté avec succés');
          this.addUtilisateurForm.reset();
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
    let currentutilisateur = this.utilisateur[index];
    this.idEdit = this.utilisateur[index].id;
    //  mettre les valeurs de l'objet < currentUtilisateur > dans les champs du formulaire edit 
    this.addUtilisateurForm.patchValue(currentutilisateur);
  }

  /* fonction click editUtilisateur */
  public editUtilisateur() {
    let user = this.addUtilisateurForm.value;
    user.id = this.idEdit;
    this.utilisateurService.updateUtilisateur(user).subscribe((data) => {
          this.getutilisateurFromService();
          document.getElementById("close-add-modal").click();
          this.toastr.success('Utilisateur modifé avec succés');
        }
      )
  }

  // Send ID to deleteForm 
  public moveIDToDeleteForm(index) {
    this.idDelete = this.utilisateur[index].id;
  }

  /* fonction click deleteUtilisateur */
  public deleteUtilisateur(id) {
    this.utilisateurService.deleteUtilisateur(id).subscribe((data) => {
          this.getutilisateurFromService();
          document.getElementById("close-delete-modal").click();
          this.toastr.success('Utilisateur supprimé avec succés');
        }
      )
  }

  public search(user) {
    this.utilisateurService.searchByUser(user).subscribe((data) => this.getutilisateurFromService());
    if (this.prenom != "") {
    } else if (this.prenom == "") {
      this.ngOnInit();
    }
    this.utilisateur = this.utilisateur.filter(res => {
      return res.prenom.toLocaleLowerCase().match(this.prenom.toLocaleLowerCase());
    });
  }

  public isElementNotValid(field: string): boolean {
    return this.addUtilisateurForm.get(field) && !this.addUtilisateurForm.get(field).hasError("required") && this.addUtilisateurForm.get(field).invalid;
  }

  private initForm(): void {
    this.addUtilisateurForm = this.fb.group({
      cin: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      prenom: [null, [Validators.required]],
      nom: [null, [Validators.required]],
      //telephone: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      telephone: [null],
      certification: [null],
      adresse: [null],
      email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: [null, [Validators.required]],
      role: [null, [Validators.required]]
    })
  }

}


