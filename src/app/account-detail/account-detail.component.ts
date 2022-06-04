import { Component, OnInit, Input } from '@angular/core';
import { Account} from '../accounts/account';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  @Input() account?: Account;

  constructor() { }

  ngOnInit(): void {
  }

}
