import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAccount } from '../interfaces/iaccount';
import { Response } from '../interfaces/response';
import { Observable } from 'rxjs';
import { InputAccount } from '../interfaces/input-account';

@Injectable({
  providedIn: 'root',
})
export class AccountDataService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:28938/api/Account';
  getAllAccounts(): Observable<Response<IAccount[]>> {
    return this.http.get<Response<IAccount[]>>(this.url + '/GetAllAccounts');
  }
  deleteAccount(accountNo: number): Observable<Response<IAccount>> {
    return this.http.delete<Response<IAccount>>(
      `${this.url}/DeleteAccount/${accountNo}`
    );
  }

  accountStatusChange(accountNo: number): Observable<Response<IAccount>> {
    return this.http.put<Response<IAccount>>(`${this.url}/UpdateAccountStatus/${accountNo}`, []);
  }

  getIntrestByAccountNo(accountNo: number): Observable<Response<IAccount>> {
    return this.http.get<Response<IAccount>>(
      `${this.url}/GetIntrestByAccountNo/${accountNo}`
    );
  }
  getInterest(accountType: string): Observable<string> {
    return this.http.get<string>(`${this.url}/GetInterestRate/${accountType}`);
  }

  addAccount(account: InputAccount): Observable<Response<IAccount>> {
    return this.http.post<Response<IAccount>>(this.url + '/AddAccount', account);
  }
}
