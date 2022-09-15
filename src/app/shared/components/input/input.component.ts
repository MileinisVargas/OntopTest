import { Component, Input, OnInit } from '@angular/core';
import { InputTypes } from '../../interfaces/interfaces';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() placeholder = '';
  @Input() class: InputTypes = 'input1';
  @Input() icon = false;

  constructor() {}

  ngOnInit(): void {}
}
