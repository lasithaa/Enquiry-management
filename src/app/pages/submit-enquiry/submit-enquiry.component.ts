import { Component, inject, OnInit } from '@angular/core';
import { MasterServiceService } from '../../services/master-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-submit-enquiry',
  imports: [FormsModule],
  templateUrl: './submit-enquiry.component.html',
  styleUrl: './submit-enquiry.component.css'
})
export class SubmitEnquiryComponent implements OnInit {

  masterService = inject(MasterServiceService);

  statusList: any[] = [];
  categoryList: any[] = [];

  newEnquiryObj: any =
    {
      "enquiryId": 0,
      "customerName": "",
      "customerEmail": "",
      "customerPhone": "",
      "message": "",
      "categoryId": 0,
      "statusId": 0,
      "enquiryType": "",
      "isConverted": false,
      "enquiryDate": "",
      "followUpDate": new Date(),
      "feedback": ""
    }


  ngOnInit(): void {
    this.getStatus();
    this.getCategory();
  }

  getStatus() {
    this.masterService.getAllStatus().subscribe({
      next: (result: any) => {
        this.statusList = result.data;
      }
    })
  }

  getCategory() {
    this.masterService.getAllCategory().subscribe({
      next: (result: any) => {
        this.categoryList = result.data;
      }
    })
  }

  onConvertedChange(value: boolean) {
    this.newEnquiryObj.isConverted = value;
  }

  onSaveEnquiry() {
    this.masterService.saveEnquiry(this.newEnquiryObj).subscribe({
      next: (result: any) => {
        alert("Enquiry Submitted Successfully");
      },
      error: (error: any) => {
        alert("Error" + error);
      }
    })
  }

}
