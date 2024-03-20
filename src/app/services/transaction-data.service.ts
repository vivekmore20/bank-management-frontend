import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITransaction } from '../interfaces/itransaction';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/response';
import { InputTransaction } from '../interfaces/input-transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionDataService {

  constructor(private http:HttpClient) { }
  url='http://localhost:28938/api/Transaction'
  getAllTransactions():Observable<Response<ITransaction[]>>{
    return this.http.get<Response<ITransaction[]>>(this.url+"/GetAlllTransactions")
  }


  addTransaction(transaction:InputTransaction):Observable<string>{
    return this.http.post(this.url+"/AddTransaction",transaction,{responseType:'text'}) 
  }
 

  getAllTransactionsByAccountNo(accountNo:number):Observable<Response<ITransaction[]>>{
    return this.http.get<Response<ITransaction[]>>(`${this.url}/GetAlllTransactionsByAccountNumber/${accountNo}`)
  }

}
