import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DatePickerComponent,
    NavbarComponent,
  ],
  imports: [CommonModule],
  exports: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DatePickerComponent,
    NavbarComponent,
  ],
})
export class SharedModule {}
