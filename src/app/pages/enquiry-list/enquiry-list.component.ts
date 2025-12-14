import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MasterServiceService } from '../../services/master-service.service';

@Component({
  selector: 'app-enquiry-list',
  imports: [CommonModule, DatePipe],
  templateUrl: './enquiry-list.component.html',
  styleUrl: './enquiry-list.component.css'
})
export class EnquiryListComponent implements OnInit {

  enquiryList: any[] = [];
  masterService = inject(MasterServiceService);



  ngOnInit(): void {
    this.getAllEnquiry();
  }

  getAllEnquiry() {

    this.masterService.getAllEnquiry().subscribe({
      next: (res: any) => {
        this.enquiryList = res.data;
      },
      error: (err: any) => {
        console.log(err);

      }
    })

  }



}
