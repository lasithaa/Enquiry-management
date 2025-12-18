import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MasterServiceService } from '../../services/master-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEnquiry } from '../../model/Interface/master.model';

@Component({
  selector: 'app-enquiry-list',
  imports: [CommonModule, DatePipe],
  templateUrl: './enquiry-list.component.html',
  styleUrl: './enquiry-list.component.css'
})
export class EnquiryListComponent implements OnInit, OnDestroy {

  enquiryList: IEnquiry[] = [];
  masterService = inject(MasterServiceService);
  router = inject(Router);
  subscription !: Subscription;



  ngOnInit(): void {
    this.getAllEnquiry();
  }

  getAllEnquiry() {

    this.subscription = this.masterService.getAllEnquiry().subscribe({
      next: (res: any) => {
        this.enquiryList = res.data;
      },
      error: (err: any) => {
        console.log(err);

      }
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addNewEnquiry() {
    this.router.navigate(['/submit-enquiry']);
  }



}
