import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IApiResponseModel } from '../model/Interface/master.model';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor(private http: HttpClient) { }

  //https://freeprojectapi.com/api.html ----- API Documentation

  // Use relative URL for proxy in development
  // Make sure to restart dev server after proxy.conf.json is created: ng serve
  private apiUrl = '/api/Enquiry';

  // getAllCategory() {
  //   return this.http.get(`${this.apiUrl}/get-categories`);
  // }

  getAllCategory() {
    return this.http.get<IApiResponseModel>(`${this.apiUrl}/get-categories`).pipe(
      map((response: IApiResponseModel) => response.data)
    );
  }

  // getAllStatus() {
  //   return this.http.get(`${this.apiUrl}/get-statuses`);
  // }

  getAllStatus() {
    return this.http.get<IApiResponseModel>(`${this.apiUrl}/get-statuses`).pipe(
      map((response: IApiResponseModel) => response.data)
    )
  }



  saveEnquiry(obj: any) {
    return this.http.post<any>(`${this.apiUrl}/create-enquiry`, obj);
  }

  getAllEnquiry() {
    return this.http.get(`${this.apiUrl}/get-enquiries`);
  }

}
