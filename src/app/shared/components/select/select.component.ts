import { Component, Input, OnInit } from '@angular/core';
import { SelectTypes } from '../../interfaces/interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() text = '';
  @Input() class: SelectTypes = 'select1';

  constructor() {}

  ngOnInit(): void {}
}
