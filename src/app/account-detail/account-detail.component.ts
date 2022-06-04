import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Account} from '../accounts/account';
import { AccountService} from '../services/account.service';

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

  goBack(): void {
    this.location.back();
  }
}
