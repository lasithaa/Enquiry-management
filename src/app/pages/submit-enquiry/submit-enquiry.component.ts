import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MasterServiceService } from '../../services/master-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, AsyncPipe } from '@angular/common';
import { Enquiry } from '../../model/enquiry';
import { ICategory, IStatus } from '../../model/Interface/master.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-submit-enquiry',
  imports: [FormsModule, CommonModule, AsyncPipe],
  templateUrl: './submit-enquiry.component.html',
  styleUrl: './submit-enquiry.component.css'
})
export class SubmitEnquiryComponent implements OnInit, OnDestroy {

  masterService = inject(MasterServiceService);
  subscription !: Subscription;

  $statusList: Observable<IStatus[]> = this.masterService.getAllStatus();
  $categoryList: Observable<ICategory[]> = this.masterService.getAllCategory();

  constructor() {
  }

  newEnquiryObj: Enquiry = new Enquiry();


  ngOnInit(): void {

  }

  onConvertedChange(value: boolean) {
    this.newEnquiryObj.isConverted = value;
  }

  onSaveEnquiry() {
    this.subscription = this.masterService.saveEnquiry(this.newEnquiryObj).subscribe({
      next: (result: any) => {
        alert("Enquiry Submitted Successfully");
      },
      error: (error: any) => {
        alert("Error" + error);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
