import { Component, Input, OnInit } from '@angular/core';
import { ButtonTypes } from '../../interfaces/interfaces';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() img = '';
  @Input() class: ButtonTypes = 'button1';

  constructor() {}

  ngOnInit(): void {}
}
