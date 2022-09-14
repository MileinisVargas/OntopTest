import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [InputComponent, ButtonComponent, SelectComponent],
  imports: [CommonModule],
  exports: [InputComponent, ButtonComponent, SelectComponent],
})
export class SharedModule {}
