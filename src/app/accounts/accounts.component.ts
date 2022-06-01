import { Component, OnInit } from '@angular/core';
import { Account } from './account';
import { ACCOUNTS } from './mock-accounts';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor() { }

  /*
  account: Account = {
    id: 1,
    number: '123',
    description: 'abn-amro'
  }
*/

  accounts = ACCOUNTS;

  ngOnInit(): void {
    
  }

}
