import { Component, Input, OnInit } from '@angular/core';
import { StatusTypes } from '../../interfaces/interfaces';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @Input() status: StatusTypes = 'Active';
  constructor() {}

  ngOnInit(): void {}
}
