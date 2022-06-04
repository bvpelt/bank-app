import { Component, OnInit } from '@angular/core';
import { Account } from './account';
import { AccountService } from '../services/account.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

//  accounts = ACCOUNTS;
  accounts: Account[] = [];

  selectedAccount?: Account;

  constructor(private accountService: AccountService, private messageService: MessageService) {}

  ngOnInit(): void {   
    this.getAccounts(); 
  }

  onSelect(account: Account): void {
    this.selectedAccount = account;
    this.messageService.add(`AccountComponent: Selected account id=${account.id}`);
  }
  
  getAccounts(): void {
    this.accountService.getAccounts()
        .subscribe(accounts => this.accounts = accounts);
  }
}
