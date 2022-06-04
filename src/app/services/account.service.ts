import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, tap} from "rxjs/operators";
import { Observable, of } from 'rxjs';

import { Account } from '../accounts/account';
import { ACCOUNTS } from '../accounts/mock-accounts';
import {BaseService} from "./baseservice";
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService {

  private accountsUrl = 'http://127.0.0.1:8080/accounts';  // URL to web api
  private headers: HttpHeaders;
  

  constructor(private http: HttpClient, private messageService: MessageService) {
    super();    
    this.headers = this.makeSystemHeaders()
   }

  /*
  getAccounts(): Observable<Account[]> {
    const accounts = of(ACCOUNTS);
    this.messageService.add('AccountService: fetched accounts');
    return accounts;
  }
  */
  
  /** GET accounts from the server */
  getAccounts(): Observable<Account[]> {
    
    return this.http.get<Account[]>(this.accountsUrl, { responseType: 'json', headers: this.headers })
    .pipe(
      tap(Account => this.logRes(Account),
        catchError(this.handleError('getAccounts'))
      ))
  }
  
  getAccount(id: number): Observable<Account> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const account = ACCOUNTS.find(account => account.id === id)!;
    this.messageService.add(`AccountService: fetched account id=${id}`);
    return of(account);
  }

 
 
}