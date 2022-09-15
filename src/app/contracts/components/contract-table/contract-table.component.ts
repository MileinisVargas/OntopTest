import { Component, OnInit } from '@angular/core';
import { StatusTypes } from 'src/app/shared/interfaces/interfaces';

interface User {
  contractorName: string;
  type: string;
  startDate: string;
  amount: string;
  status: StatusTypes;
}

@Component({
  selector: 'app-contract-table',
  templateUrl: './contract-table.component.html',
  styleUrls: ['./contract-table.component.scss'],
})
export class ContractTableComponent implements OnInit {
  users: User[] = [];

  constructor() {}

  ngOnInit(): void {
    this.users = this.getUsers();
  }

  getUsers(): User[] {
    return [
      {
        contractorName: 'Darlene Robertson',
        type: 'Traditional',
        startDate: 'Mar 4,2021',
        amount: '$200 USD',
        status: 'Active',
      },
      {
        contractorName: 'Darlene Robertson',
        type: 'Traditional',
        startDate: 'Mar 4,2021',
        amount: '$200 USD',
        status: 'Active',
      },
      {
        contractorName: 'Darlene Robertson',
        type: 'Traditional',
        startDate: 'Mar 4,2021',
        amount: '$200 USD',
        status: 'Signature pending',
      },
    ];
  }
}
