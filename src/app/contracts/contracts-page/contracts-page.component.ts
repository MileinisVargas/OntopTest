import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contracts-page',
  templateUrl: './contracts-page.component.html',
  styleUrls: ['./contracts-page.component.scss'],
})
export class ContractsPageComponent implements OnInit {
  client = '{{Client}}';
  // client = 'Melani Torres';

  constructor() {}

  ngOnInit(): void {}
}
