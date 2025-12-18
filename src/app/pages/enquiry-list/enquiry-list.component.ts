import { CommonModule, DatePipe, AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MasterServiceService } from '../../services/master-service.service';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { IEnquiry } from '../../model/Interface/master.model';

@Component({
  selector: 'app-enquiry-list',
  imports: [CommonModule, DatePipe, AsyncPipe],
  templateUrl: './enquiry-list.component.html',
  styleUrl: './enquiry-list.component.css'
})
export class EnquiryListComponent {

  masterService = inject(MasterServiceService);
  $enquiryList: Observable<IEnquiry[]> = this.masterService.getAllEnquiry();
  router = inject(Router);

  addNewEnquiry() {
    this.router.navigate(['/submit-enquiry']);
  }

}
