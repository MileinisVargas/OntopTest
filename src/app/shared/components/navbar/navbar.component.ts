import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items = ['contracts', 'documents', 'payout', 'time'];

  constructor() {}

  ngOnInit(): void {}

  arrowDown(item: string) {
    if (item === this.items[0]) {
      return '/assets/svg/arrow_down.svg';
    }
    return '/assets/svg/arrow_down_gray.svg';
  }
}
