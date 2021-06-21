import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public addClientForm: FormGroup;
  public submitted = false;

  public idDelete: any = 0;
  public idEdit: any = 0;
  public index: number;
  public client: any;

  //customer:any;
  public id: any;
  public raisonsocial: string;

  public action: string;
  totalLength:any;
    page:number=1;
    result:any;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private clientService: ClientService) { }


  ngOnInit(): void {
    this.initForm();
    this.getclientFromService();
  }

  private getclientFromService() {
    this.clientService.getAllClient().subscribe((data) => this.client = data);
  }

  public addClient() {
    this.submitted = true;
    if (this.addClientForm.valid) {
      let client = this.addClientForm.value;
      this.clientService.addClient(client).subscribe((data) => {
          this.getclientFromService();
           this.addClientForm.reset();
          document.getElementById("close-add-modal").click();
          this.toastr.success('client ajouté avec succés');
          this.addClientForm.reset();
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
    let currentclient = this.client[index];
    this.idEdit = this.client[index].id;
    //  mettre les valeurs de l'objet < currentclient > dans les champs du formulaire edit 
    this.addClientForm.patchValue(currentclient);
  }

  /* fonction click editclient */
  public editClient() {
    let customer = this.addClientForm.value;
    customer.id = this.idEdit;
    this.clientService.updateClient(customer).subscribe((data) => {
          this.getclientFromService();
          document.getElementById("close-add-modal").click();
          this.toastr.success('client modifé avec succés');
        }
      )
  }

  // Send ID to deleteForm 
  public moveIDToDeleteForm(index) {
    this.idDelete = this.client[index].id;
  }

  /* fonction click deleteclient */
  public deleteClient(id) {
    this.clientService.deleteClient(id).subscribe((data) => {
          this.getclientFromService();
          document.getElementById("close-delete-modal").click();
          this.toastr.success('client supprimé avec succés');
        }
      )
  }

  public search(customer) {
    this.clientService.searchByCustomer(customer).subscribe((data) => this.getclientFromService());
    if (this.raisonsocial != "") {
    } else if (this.raisonsocial == "") {
      this.ngOnInit();
    }
    this.client = this.client.filter(res => {
      return res.raisonsocial.toLocaleLowerCase().match(this.raisonsocial.toLocaleLowerCase());
    });
  }

  public isElementNotValid(field: string): boolean {
    return this.addClientForm.get(field) && !this.addClientForm.get(field).hasError("required") && this.addClientForm.get(field).invalid;
  }

  private initForm(): void {
    this.addClientForm = this.fb.group({
      raisonsocial: [null, [Validators.required]],
      adresse: [null, [Validators.required]],
      ville: [null, [Validators.required]],
      telephone: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      tva: [null],
      timbre: [null],
      remise: [null]
    })
  }

}
