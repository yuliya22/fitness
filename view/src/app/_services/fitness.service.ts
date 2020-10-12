import { Injectable } from '@angular/core';
import{Observable} from 'rxjs'
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class FitnessService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {
  }

  saveRegister(data) {
    let register = this.baseUrl + "fitness/register";
    return this.http.post(register, data);
  }
  paypalPayment(val){
    let paymentUrl= this.baseUrl + "fitness/payment";
    return this.http.post(paymentUrl,{val:val});
  }
}

