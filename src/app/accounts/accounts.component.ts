import { Component, OnInit } from '@angular/core';
import { Account } from './account';
import { ACCOUNTS } from './mock-accounts';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts = ACCOUNTS;
  selectedAccount?: Account;

  constructor() { }

  ngOnInit(): void {    
  }

  onSelect(account: Account): void {
    this.selectedAccount = account;
  }

}
