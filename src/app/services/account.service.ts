import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Account } from '../accounts/account';
import { ACCOUNTS } from '../accounts/mock-accounts';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private messageService: MessageService) { }

  getAccounts(): Observable<Account[]> {
    const accounts = of(ACCOUNTS);
    this.messageService.add('AccountService: fetched accounts');
    return accounts;
  }

  getAccount(id: number): Observable<Account> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const account = ACCOUNTS.find(account => account.id === id)!;
    this.messageService.add(`AccountService: fetched account id=${id}`);
    return of(account);
  }
}