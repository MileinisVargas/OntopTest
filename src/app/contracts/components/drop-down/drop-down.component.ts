import { Component, Input, OnInit } from '@angular/core';
import { DropDownTypes } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent implements OnInit {
  @Input() imgName: DropDownTypes = '3dots_horizontal';

  constructor() {}

  ngOnInit(): void {}
}
