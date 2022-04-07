import { TokenStorageServiceService } from "./../../../../Service/token-storage-service.service";
import { ImportSfService } from "./import-sf.service";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
@Component({
  selector: "app-import-sf",
  templateUrl: "./import-sf.component.html",
  styleUrls: ["./import-sf.component.scss"],
})
export class ImportSfComponent implements OnInit {
  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef;
  files = [];
  fileName: string;
  ErrorUplad: string;
  uploadProgress: number;
  emailUser: string;
  NomnclatureVeif = false;
  extension = false;
  DateFileVeif = false;
  showAlert = false;
  showProgrssBar = false;
  name = "";
  listErreurUpload = [];
  constructor(
    private importSfService: ImportSfService,
    private tokenStorageServiceService: TokenStorageServiceService
  ) {}

  ngOnInit() {}
  UploadSF() {
    const fileUpload = this.fileUpload.nativeElement;
    this.showAlert = false;

    this.fileName="Télechargement en cours ...."
    this.showProgrssBar = false;
    fileUpload.onchange = () => {
      const file = fileUpload.files[0];
      
      if (this.verifFile(file.name)) {
        // this.fileName = file.name +" is uploaded Successfully"

        this.files.push({ data: file, inProgress: false, progress: 0 });
        this.uploadFiles();
      } else {
        this.showProgrssBar = false;
        this.fileName = file.name + " is not uploaded ";
      }
    };
    fileUpload.click();
  }
  private uploadFiles() {
    this.fileUpload.nativeElement.value = "";
    this.files.forEach((file) => {
      this.uploadFile(file);
    });
  }
  uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file.data);
   
    file.inProgress = true;

    

    this.emailUser = sessionStorage.getItem("Email_User");
    this.showProgrssBar = true;
    this.importSfService.upload(formData, this.emailUser).subscribe(
      (res) => {
        this.ErrorUplad = res.error;
        this.fileName = this.ErrorUplad.split(":")[1];
        console.log(res.error);
      },

      (error) => {
        console.log(error);

        this.fileName = error.error.text;
      }
      
    );
  }
  verifFile(fileNameVeif) {
    this.listErreurUpload = [];
    const regexp = "^(SAG|AMM)";

    let min = new Date("2020-01-01");
    let max = new Date("2022-01-01");

    if (fileNameVeif.split("_")[0].match(regexp)) {
      this.NomnclatureVeif = true;

      const secondPart = fileNameVeif.split("_")[1];
console.log(secondPart.split(".")[0]);

      let date = new Date(secondPart.split(".")[0]);
      console.log(max);
       console.log(date);
      console.log(min);
      
     
      
      if (date >= min && date <= max) {
        this.DateFileVeif = true;
       
      } else {
        this.DateFileVeif = false;
        this.listErreurUpload.push("time est incorrect");
  
      }
      if (secondPart.split(".")[1] == "xml") {
        this.extension = true;
       
      } else {
        this.extension = false;
        this.listErreurUpload.push("extension xml incorrect");
      
      }
    } else {
      this.NomnclatureVeif = false;
      this.listErreurUpload.push("Nomenclature  est incorect ");

      // console.log("extension not success ");
    }
    this.showAlert = true;
    console.log(this.listErreurUpload);
    if (this.NomnclatureVeif && this.DateFileVeif && this.extension) {
      return true;
    } else {
      return false;
    }
  }
}
