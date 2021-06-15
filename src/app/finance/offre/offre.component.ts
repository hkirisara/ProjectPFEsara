import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { InterventionService } from "src/app/service/intervention.service";
import { OffreService } from "src/app/service/offre.service";
import { DiagnosticService } from "src/app/service/diagnostic.service";
import { ClientService } from "src/app/service/client.service";

function Dizaine(nombre) {
  var dizaine;
  switch (nombre) {
    case 10:
      dizaine = "dix";
      break;
    case 11:
      dizaine = "onze";
      break;
    case 12:
      dizaine = "douze";
      break;
    case 13:
      dizaine = "treize";
      break;
    case 14:
      dizaine = "quatorze";
      break;
    case 15:
      dizaine = "quinze";
      break;
    case 16:
      dizaine = "seize";
      break;
    case 17:
      dizaine = "dix-sept";
      break;
    case 18:
      dizaine = "dix-huit";
      break;
    case 19:
      dizaine = "dix-neuf";
      break;
    case 20:
      dizaine = "vingt";
      break;
    case 30:
      dizaine = "trente";
      break;
    case 40:
      dizaine = "quarante";
      break;
    case 50:
      dizaine = "cinquante";
      break;
    case 60:
      dizaine = "soixante";
      break;
    case 70:
      dizaine = "soixante-dix";
      break;
    case 80:
      dizaine = "quatre-vingt";
      break;
    case 90:
      dizaine = "quatre-vingt-dix";
      break;
  } //fin switch
  return dizaine;
} //-----------------------------------------------------------------------

function Unite(nombre) {
  var unite;
  switch (nombre) {
    case 0:
      unite = "zéro";
      break;
    case 1:
      unite = "un";
      break;
    case 2:
      unite = "deux";
      break;
    case 3:
      unite = "trois";
      break;
    case 4:
      unite = "quatre";
      break;
    case 5:
      unite = "cinq";
      break;
    case 6:
      unite = "six";
      break;
    case 7:
      unite = "sept";
      break;
    case 8:
      unite = "huit";
      break;
    case 9:
      unite = "neuf";
      break;
  } //fin switch
  return unite;
} //-----------------------------------------------------------------------
@Component({
  selector: "app-offre",
  templateUrl: "./offre.component.html",
  styleUrls: ["./offre.component.css"],
})
export class OffreComponent implements OnInit {
  public addOffreForm: FormGroup;
  public submitted = false;
  public idDelete: any = 0;
  public idEdit: any = 0;
  public index: number;
  public offres = null;
  public offre: any;
  public mouvement: any = null;
  public affectation: any;
  public utilisateur: any;
  public intervention: any;
  public diagnos: any;
  public interdiagnostic: any;
  public id: any;
  public action: string;
  public prenom: any;
  public nom: any;
  public checked: boolean;
  //public checkedDiac: boolean = false;
  //public checkedMvmt : boolean = false;
  public array: any[] = [];
  public arrayDiac: any[] = [];
  public arrayMvmt: any[] = [];
  dateoffre = Date.now();
  public interventionId: any;
  public InterventionId: string;
  public client: any;
  totalLength: any;
  page: number = 1;
  result: any;
  private editField: any;
  clientOfIntervention: any;
  newOffre;
  interventionSelected: any;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private diagnosticService: DiagnosticService,
    private interventionService: InterventionService,
    private offreService: OffreService,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    /* this.interventionService.getInterInDiag().subscribe((res)=>{
      console.log(res);
    })*/
    this.initForm();
    this.getoffreFromService();
    this.clientService
      .getAllClientBYInterventionHasDiagno()
      .subscribe((data) => (this.client = data));
  }

  NumberToLetter(nombre: number) {
    var i, j, n, quotient, reste, nb;
    var ch;
    var numberToLetter = "";
    //__________________________________

    if (nombre.toString().replace(/ /gi, "").length > 15)
      return "dépassement de capacité";
    if (isNaN(Number(nombre.toString().replace(/ /gi, ""))))
      return "Nombre non valide";

    nb = parseFloat(nombre.toString().replace(/ /gi, ""));
    if (Math.ceil(nb) != nb) return "Nombre avec virgule non géré.";

    n = nb.toString().length;
    switch (n) {
      case 1:
        numberToLetter = Unite(nb);
        break;
      case 2:
        if (nb > 19) {
          quotient = Math.floor(nb / 10);
          reste = nb % 10;
          if (nb < 71 || (nb > 79 && nb < 91)) {
            if (reste == 0) numberToLetter = Dizaine(quotient * 10);
            if (reste == 1)
              numberToLetter = Dizaine(quotient * 10) + "-et-" + Unite(reste);
            if (reste > 1)
              numberToLetter = Dizaine(quotient * 10) + "-" + Unite(reste);
          } else
            numberToLetter =
              Dizaine((quotient - 1) * 10) + "-" + Dizaine(10 + reste);
        } else numberToLetter = Dizaine(nb);
        break;
      case 3:
        quotient = Math.floor(nb / 100);
        reste = nb % 100;
        if (quotient == 1 && reste == 0) numberToLetter = "cent";
        if (quotient == 1 && reste != 0)
          numberToLetter = "cent" + " " + this.NumberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = Unite(quotient) + " cents";
        if (quotient > 1 && reste != 0)
          numberToLetter =
            Unite(quotient) + " cent " + this.NumberToLetter(reste);
        break;
      case 4:
        quotient = Math.floor(nb / 1000);
        reste = nb - quotient * 1000;
        if (quotient == 1 && reste == 0) numberToLetter = "mille";
        if (quotient == 1 && reste != 0)
          numberToLetter = "mille" + " " + this.NumberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.NumberToLetter(quotient) + " mille";
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.NumberToLetter(quotient) +
            " mille " +
            this.NumberToLetter(reste);
        break;
      case 5:
        quotient = Math.floor(nb / 1000);
        reste = nb - quotient * 1000;
        if (quotient == 1 && reste == 0) numberToLetter = "mille";
        if (quotient == 1 && reste != 0)
          numberToLetter = "mille" + " " + this.NumberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.NumberToLetter(quotient) + " mille";
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.NumberToLetter(quotient) +
            " mille " +
            this.NumberToLetter(reste);
        break;
      case 6:
        quotient = Math.floor(nb / 1000);
        reste = nb - quotient * 1000;
        if (quotient == 1 && reste == 0) numberToLetter = "mille";
        if (quotient == 1 && reste != 0)
          numberToLetter = "mille" + " " + this.NumberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.NumberToLetter(quotient) + " mille";
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.NumberToLetter(quotient) +
            " mille " +
            this.NumberToLetter(reste);
        break;
      case 7:
        quotient = Math.floor(nb / 1000000);
        reste = nb % 1000000;
        if (quotient == 1 && reste == 0) numberToLetter = "un million";
        if (quotient == 1 && reste != 0)
          numberToLetter = "un million" + " " + this.NumberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.NumberToLetter(quotient) + " millions";
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.NumberToLetter(quotient) +
            " millions " +
            this.NumberToLetter(reste);
        break;
      case 8:
        quotient = Math.floor(nb / 1000000);
        reste = nb % 1000000;
        if (quotient == 1 && reste == 0) numberToLetter = "un million";
        if (quotient == 1 && reste != 0)
          numberToLetter = "un million" + " " + this.NumberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.NumberToLetter(quotient) + " millions";
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.NumberToLetter(quotient) +
            " millions " +
            this.NumberToLetter(reste);
        break;
      case 9:
        quotient = Math.floor(nb / 1000000);
        reste = nb % 1000000;
        if (quotient == 1 && reste == 0) numberToLetter = "un million";
        if (quotient == 1 && reste != 0)
          numberToLetter = "un million" + " " + this.NumberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.NumberToLetter(quotient) + " millions";
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.NumberToLetter(quotient) +
            " millions " +
            this.NumberToLetter(reste);
        break;
      case 10:
        quotient = Math.floor(nb / 1000000000);
        reste = nb - quotient * 1000000000;
        if (quotient == 1 && reste == 0) numberToLetter = "un milliard";
        if (quotient == 1 && reste != 0)
          numberToLetter = "un milliard" + " " + this.NumberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.NumberToLetter(quotient) + " milliards";
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.NumberToLetter(quotient) +
            " milliards " +
            this.NumberToLetter(reste);
        break;
      case 11:
        quotient = Math.floor(nb / 1000000000);
        reste = nb - quotient * 1000000000;
        if (quotient == 1 && reste == 0) numberToLetter = "un milliard";
        if (quotient == 1 && reste != 0)
          numberToLetter = "un milliard" + " " + this.NumberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.NumberToLetter(quotient) + " milliards";
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.NumberToLetter(quotient) +
            " milliards " +
            this.NumberToLetter(reste);
        break;
      case 12:
        quotient = Math.floor(nb / 1000000000);
        reste = nb - quotient * 1000000000;
        if (quotient == 1 && reste == 0) numberToLetter = "un milliard";
        if (quotient == 1 && reste != 0)
          numberToLetter = "un milliard" + " " + this.NumberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.NumberToLetter(quotient) + " milliards";
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.NumberToLetter(quotient) +
            " milliards " +
            this.NumberToLetter(reste);
        break;
      case 13:
        quotient = Math.floor(nb / 1000000000000);
        reste = nb - quotient * 1000000000000;
        if (quotient == 1 && reste == 0) numberToLetter = "un billion";
        if (quotient == 1 && reste != 0)
          numberToLetter = "un billion" + " " + this.NumberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.NumberToLetter(quotient) + " billions";
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.NumberToLetter(quotient) +
            " billions " +
            this.NumberToLetter(reste);
        break;
      case 14:
        quotient = Math.floor(nb / 1000000000000);
        reste = nb - quotient * 1000000000000;
        if (quotient == 1 && reste == 0) numberToLetter = "un billion";
        if (quotient == 1 && reste != 0)
          numberToLetter = "un billion" + " " + this.NumberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.NumberToLetter(quotient) + " billions";
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.NumberToLetter(quotient) +
            " billions " +
            this.NumberToLetter(reste);
        break;
      case 15:
        quotient = Math.floor(nb / 1000000000000);
        reste = nb - quotient * 1000000000000;
        if (quotient == 1 && reste == 0) numberToLetter = "un billion";
        if (quotient == 1 && reste != 0)
          numberToLetter = "un billion" + " " + this.NumberToLetter(reste);
        if (quotient > 1 && reste == 0)
          numberToLetter = this.NumberToLetter(quotient) + " billions";
        if (quotient > 1 && reste != 0)
          numberToLetter =
            this.NumberToLetter(quotient) +
            " billions " +
            this.NumberToLetter(reste);
        break;
    } //fin switch
    /*respect de l'accord de quatre-vingt*/
    if (
      numberToLetter.substr(
        numberToLetter.length - "quatre-vingt".length,
        "quatre-vingt".length
      ) == "quatre-vingt"
    )
      numberToLetter = numberToLetter + "s";

    return numberToLetter;
  }
  private getoffreFromService() {
    this.offreService.getAllOffre().subscribe((data) => {
      this.offre = data;
      for (let i = 0; i < this.offre.length; i++) {
        this.offre[i].dateoffre = new Date(
          this.offre[i].dateoffre
        ).toLocaleString();
      }
    });
    /*this.offreService.getoffreByInterventionId(this.interventionId)*/
    /* this.diagnosticService.getDiagnosticByInterventionId(this.InterventionId).subscribe((data) => {
      this.interdiagnostic = this.intiTable(data)
      for (let i=0; i<this.interdiagnostic.length; i++) {
        this.interdiagnostic[i].date = new Date(this.interdiagnostic[i].date).toLocaleString()
      }
    });*/

    this.interventionService.getAllInterventionprocessed().subscribe((data) => {
      this.intervention = this.intiTable(data);
      for (let i = 0; i < this.intervention.length; i++) {
        this.intervention[i].dateajout = new Date(
          this.intervention[i].dateajout
        ).toLocaleString();
      }
    });
  }
  private intiTable(data) {
    let result: any[] = [];
    if (data) {
      data.forEach((item) => {
        result.push({
          id: item.id,
          raisonsocial: item.client.raisonsocial,
          dateajout: item.dateajout,
          typemateriel: item.typemateriel.typemateriel,
          marque: item.marque.marque,
          modele: item.modele,
          numserie: item.numserie,
          panne: item.panne,
          //etat: item.etat
        });
      });
    }
    return result;
  }
  public addOffre() {
    // this.submitted = true;
    // if (this.addOffreForm.valid) {
    //   let offre = this.addOffreForm.value;
    //   this.offreService.addOffre(offre).subscribe((data) => {
    //     this.getoffreFromService();
    //     document.getElementById("close-add-modal").click();
    //     this.toastr.success("offre ajouté avec succés");
    //     this.addOffreForm.reset();
    //   });
    // }

    this.offreService.addOffre(this.newOffre).subscribe((data) => {
      console.log(data);
      this.toastr.success("offre modifé avec succés");
      // this.newOffre=data;
    });
  }

  public onNativeChange(event, data) {
    this.interventionSelected = data;
    console.log(data.id);
    this.checked = true;

    this.offreService.getOffreByInterventionId(data.id).subscribe((res) => {
      console.log("new Offres " + res);
      this.newOffre = res;
    });

    this.diagnosticService
      .getDiagnosticByInterventionId(data.id)
      .subscribe((data) => {
        this.interdiagnostic = data;
        console.log(this.interdiagnostic);
        if (this.interdiagnostic.length > 0)
          this.clientOfIntervention = this.interdiagnostic[0].intervention.client;
        else {
          this.clientOfIntervention = undefined;
        }
        console.log("this.clientOfIntervention : " + this.clientOfIntervention);
        for (let i = 0; i < this.interdiagnostic.length; i++) {
          this.interdiagnostic[i].dateajout = new Date(
            this.interdiagnostic[i].dateajout
          ).toLocaleString();
        }
        // this.calculateOffer();
      });
    /* if (event.target.checked) {
      this.array.push(data);
      this.interventionId = data.id;
    } else {
      this.array = this.array.filter((item) => item.id !== data.id);
    }
    /*let elems = Array.from(document.getElementsByClassName("ch-rd"))
    for(let i=0; i< elems.length; i++){
      elems[i].checked = false
    }*/
    /*
    let res = [];
    this.offres = null;
    let item = null;
    this.offre.forEach((element: any) => {
      if (element.intervention != null) {
        if (element.intervention.id == data.id) {
          res.push(element);
        }
      }
    });
    this.offres = res;
    this.mouvement = [];
    if (this.offres.length < 2) {
      this.mouvement[0] = {};
      if (this.offres.length == 1) {
        this.mouvement = this.offres;
        this.mouvement[0]["date_diagno"] = this.offres[0].dateoffre;
      }
      this.mouvement[0]["date_interv"] = data.date;
    }*/
    return;
  }

  private calculateOffer() {
    let totalTTC = 0;
    let totalHTV = 0;
    let timbre = 0;
    let TVA = 0;
    let codetva = 1;
    if (this.clientOfIntervention.tva)
    codetva = this.newOffre.diagnostics[0].tva;
    this.newOffre.diagnostics.forEach((i) => {
      if (this.clientOfIntervention.remise) {
        return (totalHTV += i.puhtr * i.nombredepiece);
      } else {
        return (totalHTV += i.puht * i.nombredepiece);
      }
    });
    if (this.clientOfIntervention.timbre) {
      timbre = 0.6;
    }
    let NumberToLetter = "";
    TVA = totalHTV * (codetva / 100);
    totalTTC = (totalHTV + timbre + TVA);
    if (Math.ceil(totalHTV) == totalHTV) {
      let umber_dec = totalTTC.toFixed(3).split(".")[1];
      let umber_decText= this.NumberToLetter(parseFloat(umber_dec));
      NumberToLetter =
        this.NumberToLetter(Math.floor(totalTTC)) +
        " dinars et " +
        umber_decText +
        " millimes";
      this.newOffre.numberToLetter=NumberToLetter;
    } else {
      NumberToLetter = this.NumberToLetter(Math.floor(totalTTC)) + " dinars";
      this.newOffre.numberToLetter=NumberToLetter;
    }

    this.newOffre = {
      id: this.newOffre.id,
      intervention: this.newOffre.intervention,
      totalHTV: totalHTV,
      TVA: TVA,
      diagnostics: this.newOffre.diagnostics,
      timbre: timbre,
      totalTTC: totalTTC,
      numberToLetter: NumberToLetter,
    };
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
      this.intervention.forEach((element) => {
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
      this.offre.forEach(element => {
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
  public moveDataToModifForm(index) {
    console.log(index.diagnostic);
    // this.action = "edit";
    // //moveDataToModifForm
    // let currentoffre = this.offre[index];
    // this.idEdit = this.offre[index].id;
    // //  mettre les valeurs de l'objet < currentclient > dans les champs du formulaire edit
    // this.addOffreForm.patchValue(currentoffre);
  }

  /* fonction click editclient */
  public editOffre() {
    let offre = this.addOffreForm.value;
    offre.id = this.idEdit;
    this.offreService.updateOffre(offre).subscribe((data) => {
      this.getoffreFromService();
      document.getElementById("close-add-modal").click();
      this.toastr.success("offre modifé avec succés");
    });
  }

  // Send ID to deleteForm
  public moveIDToDeleteForm(index) {
    this.idDelete = this.offre[index].id;
  }

  /* fonction click deleteclient */
  public deleteOffre(id) {
    this.offreService.deleteOffre(id).subscribe((data) => {
      this.getoffreFromService();
      document.getElementById("close-delete-modal").click();
      this.toastr.success("offre supprimé avec succés");
    });
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
    return (
      this.addOffreForm.get(field) &&
      !this.addOffreForm.get(field).hasError("required") &&
      this.addOffreForm.get(field).invalid
    );
  }

  private initForm(): void {
    this.addOffreForm = this.fb.group({
      dateoffre: [Date.now()],
      diagnostic: [null],
      piecederechange: [null],
      //client: [null],
      qte: [null],
      tva: [null],
      puht: [null],
      remise: [null],
      puhtr: [null],
      mnttva: [null],
      puttc: [null],
      ptttc: [null],
      timbre: [null],
      client: [null],
    });
  }

  onChange(e) {
    if (e != "tous") {
      this.checked = false;
      this.interventionService
        .getAllInterventionprocessedByClient(e)
        .subscribe((data) => {
          this.intervention = this.intiTable(data);
          for (let i = 0; i < this.intervention.length; i++) {
            this.intervention[i].dateajout = new Date(
              this.intervention[i].dateajout
            ).toLocaleString();
          }
        });
    } else {
      this.checked = false;
      this.interventionService
        .getAllInterventionprocessed()
        .subscribe((data) => {
          this.intervention = this.intiTable(data);
          for (let i = 0; i < this.intervention.length; i++) {
            this.intervention[i].dateajout = new Date(
              this.intervention[i].dateajout
            ).toLocaleString();
          }
        });
    }
  }

  changeValue(id: number | any, name: string, event) {
    this.editField = event.target.textContent;
    const diag = this.interdiagnostic[id];
    let puht = 0;
    let remise = 0;
    let tva = 0;
    switch (name) {
      case "tva": {
        tva = this.editField;
        this.interdiagnostic[id].puhtr =
          diag.puht - (diag.remise / 100) * diag.puht;
        this.interdiagnostic[id].mnttva = diag.puhtr * (tva / 100);
        this.interdiagnostic[id].puttc =
          Number(diag.puhtr) + Number(diag.mnttva);
        this.interdiagnostic[id].ptttc = diag.puttc * diag.nombredepiece;
        break;
      }
      case "remise": {
        remise = this.editField;
        this.interdiagnostic[id].puhtr = diag.puht - (remise / 100) * diag.puht;
        this.interdiagnostic[id].mnttva = diag.puhtr * (diag.tva / 100);
        this.interdiagnostic[id].puttc =
          Number(diag.puhtr) + Number(diag.mnttva);
        this.interdiagnostic[id].ptttc = diag.puttc * diag.nombredepiece;
        break;
      }
      case "puht": {
        puht = this.editField;
        this.interdiagnostic[id].puhtr = puht - (diag.remise / 100) * puht;
        this.interdiagnostic[id].mnttva = diag.puhtr * (diag.tva / 100);
        this.interdiagnostic[id].puttc =
          Number(diag.puhtr) + Number(diag.mnttva);
        this.interdiagnostic[id].ptttc = diag.puttc * diag.nombredepiece;
      }
    }
  }

  updateList(id: number | any, name: string, event) {
    const editField = event.target.textContent;
    this.interdiagnostic[id][name] = editField;
  }

  confirme(id: number | any) {
    console.log(id);
    let index = -1;
    this.newOffre.diagnostics.forEach((d, i) => {
      if (d.id === id.id) index = i;
    });
    if (index != -1) this.newOffre.diagnostics[index] = id;
    else this.newOffre.diagnostics.push(id);
    this.calculateOffer();
    this.diagnosticService.updateDiagnostic(id).subscribe((data) => {
      console.log(data);
      this.toastr.success("diagnostique modifier avec succés");
    });
  }

  resetOffer(i, diag) {
    this.interdiagnostic[i].puhtr = 0;
    this.interdiagnostic[i].puht = 0;
    this.interdiagnostic[i].tva = 0;
    this.interdiagnostic[i].remise = 0;
    this.interdiagnostic[i].mnttva = 0;
    this.interdiagnostic[i].puttc = 0;
    this.interdiagnostic[i].ptttc = 0;
    this.calculateOffer();
    this.diagnosticService
      .updateDiagnostic(this.interdiagnostic[i])
      .subscribe((data) => {
        console.log(data);
        this.toastr.warning("vous avez restauré le details de diagnostique");
      });
  }
}
