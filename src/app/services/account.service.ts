import { Injectable } from '@angular/core';
import { Account } from '../accounts/account';
import { ACCOUNTS } from '../accounts/mock-accounts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

/*
  getAccounts(): Account[] {
    return ACCOUNTS;
  }
*/

  getAccounts(): Observable<Account[]> {
    const accounts = of(ACCOUNTS);
    return accounts;
  }
}