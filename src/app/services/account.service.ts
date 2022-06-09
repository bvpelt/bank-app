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
   
  /** GET accounts from the server */
  getAccounts(): Observable<Account[]> {    
    return this.http.get<Account[]>(this.accountsUrl, { responseType: 'json', headers: this.headers })
    .pipe(
      tap(_ => this.logRes('fetched accounts'),
        catchError(this.handleError<Account[]>('getAccounts', []))
      ))
  }
  
  getAccount(id: number): Observable<Account> {   
    const url = `${this.accountsUrl}/${id}`;
    return this.http.get<Account>(url, { responseType: 'json', headers: this.headers })
    .pipe(
      tap(_ => this.logRes(`fetched account id=${id}`),
        catchError(this.handleError<Account>(`getAccount id=${id}`))
      ))
  }

  searchAccount(term: string): Observable<Account[]> {    
    const url = `${this.accountsUrl}/search/${term}`;
    return this.http.get<Account[]>(url, { responseType: 'json', headers: this.headers })
    .pipe(
      tap(_ => this.logRes(`searched accounts`),
        catchError(this.handleError<Account[]>(`searchedAccounts`, []))
      ))
  } 

  /** PUT: update the account on the server */
  updateAccount(account: Account): Observable<any> {
  const url = `${this.accountsUrl}/${account.id}`;
  this.logRes("sending request to: " + url)
  return this.http.put(url, account, { responseType: 'json', headers: this.headers })
  .pipe(
    tap(_ => this.logRes(`updated account id=${account.id}`)),
    catchError(this.handleError<any>('updateAccount'))
  );
  }
}