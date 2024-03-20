import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../interfaces/icustomer';
import { ICustomerInput } from '../interfaces/icustomer-input';
import { Response } from '../interfaces/response';
import { IAccount } from '../interfaces/iaccount';

@Injectable({
  providedIn: 'root',
})
export class CustomerDataService {
  constructor(private http: HttpClient) {}
  url='http://localhost:28938/api/Customer'
  postUrl = 'http://localhost:28938/api/Customer/AddCustomer';
  getCustomers(): Observable<Response<ICustomer[]>> {
    return this.http.get<Response<ICustomer[]>>(
      this.url+'/GetAllCustomers'
    );
  }

  addCustomerWithDetails(customer: ICustomerInput): Observable<string> {
    return this.http.post(this.postUrl, customer, { responseType: 'text' });
  }

  deleteCustomer(aadharNumber: string): Observable<string> {
    console.log(aadharNumber);
    let apiurl = `${this.url}/DeleteCustomer/${aadharNumber}`;
    return this.http.delete(apiurl, { responseType: 'text' });
  }

  getCustomerByAadhar(
    aadharNumber: string
  ): Observable<Response<ICustomerInput>> {
    console.log(aadharNumber);
    let apiurl = `${this.url}/GetCustomerWithAccountDetailsByAadharNo/${aadharNumber}`;
    return this.http.get<Response<ICustomerInput>>(apiurl);
  }
  getAccountByCustomerId(customerID: number): Observable<Response<IAccount[]>> {
    return this.http.get<Response<IAccount[]>>(
      `http://localhost:28938/api/Account/GetAccountByCustomerId/${customerID}`
    );
  }

  getcustomerDetailsByCustomerId(
    customerId: number
  ): Observable<Response<ICustomerInput>> {
    let apiurl = `${this.url}/GetCustomerWithAccountDetailsBycustomerId/${customerId}`;
    return this.http.get<Response<ICustomerInput>>(apiurl);
  }

  updateCustomerwithAccount(
    customerId: number,
    body: ICustomerInput
  ): Observable<string> {
    console.log(customerId);
    return this.http.put(
      `${this.url}/UpdateCustomer/${customerId}`,
      body,
      { responseType: 'text' }
    );
  }
}
