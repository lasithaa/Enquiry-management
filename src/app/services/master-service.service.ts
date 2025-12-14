import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor(private http: HttpClient) { }

  //https://freeprojectapi.com/api.html ----- API Documentation

  getAllCategory() {
    return this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-categories");
  }

  getAllStatus() {
    return this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-statuses");
  }

  saveEnquiry(obj: any) {
    return this.http.post<any>("https://api.freeprojectapi.com/api/Enquiry/", obj);
  }

}
