import { Component, OnInit } from '@angular/core';
import { Account } from './account';
// import { ACCOUNTS } from './mock-accounts';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

//  accounts = ACCOUNTS;
  accounts: Account[] = [];

  selectedAccount?: Account;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {   
    this.getAccounts(); 
  }

  onSelect(account: Account): void {
    this.selectedAccount = account;
  }

  /*
  getAccounts(): void {
    this.accounts = this.accountService.getAccounts();
  }
  */

  getAccounts(): void {
    this.accountService.getAccounts()
        .subscribe(accounts => this.accounts = accounts);
  }
}
