import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor(private http: HttpClient) { }

  //https://freeprojectapi.com/api.html ----- API Documentation

  // Use relative URL for proxy in development
  // Make sure to restart dev server after proxy.conf.json is created: ng serve
  private apiUrl = '/api/Enquiry';

  getAllCategory() {
    return this.http.get(`${this.apiUrl}/get-categories`);
  }

  getAllStatus() {
    return this.http.get(`${this.apiUrl}/get-statuses`);
  }

  saveEnquiry(obj: any) {
    return this.http.post<any>(`${this.apiUrl}/`, obj);
  }

  getAllEnquiry() {
    return this.http.get(`${this.apiUrl}/get-enquiries`);
  }

}
