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

  accountStatusChange(accountNo: number): Observable<string> {
    return this.http.put(`${this.url}/UpdateAccountStatus/${accountNo}`, [], {
      responseType: 'text',
    });
  }

  getIntrestByAccountNo(accountNo: number): Observable<Response<IAccount>> {
    return this.http.get<Response<IAccount>>(
      `${this.url}/GetIntrestByAccountNo/${accountNo}`
    );
  }
  getInterest(accountType: string): Observable<string> {
    return this.http.get<string>(`${this.url}/GetInterestRate/${accountType}`);
  }

  addAccount(account: InputAccount): Observable<string> {
    return this.http.post(this.url + '/AddAccount', account, {
      responseType: 'text',
    });
  }
}
