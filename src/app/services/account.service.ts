import { Injectable } from '@angular/core';
import { Account } from '../accounts/account';
import { ACCOUNTS } from '../accounts/mock-accounts';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private messageService: MessageService) { }

/*
  getAccounts(): Account[] {
    return ACCOUNTS;
  }
*/

  getAccounts(): Observable<Account[]> {
    const accounts = of(ACCOUNTS);
    this.messageService.add('AccountService: fetched accounts');
    return accounts;
  }
}