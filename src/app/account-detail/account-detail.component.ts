
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';


import { AccountService } from '../services/account.service';
import Account from '../accounts/account';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  account: Account | undefined;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAccount();
  }

  getAccount(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if ((id != null) && (id > 0)) {
    this.accountService.getAccount(id)
      .subscribe(account => this.account = account);
    }
  }

  // Reload accounts page
  goBack(): void {
    //this.location.back();
    this.location.go("accounts")    
  }

  save(): void {
    if (this.account) {
      if (this.account.id == 0) { // new account
        this.accountService.insertAccount(this.account)
        .subscribe(() => this.goBack());
      } else {
      this.accountService.updateAccount(this.account)
        .subscribe(() => this.goBack());
      }
    }
  }

  newAccount(): void {    
    this.account = new Account(); 
  }

  deleteAccount(): void {
    if (this.account) {      
      this.accountService.deleteAccount(this.account)
        .subscribe(() => this.goBack());      
    }
  }
}
