import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsPageComponent } from './contracts-page/contracts-page.component';
import { SharedModule } from '../shared/shared.module';
import { FiltersComponent } from './components/filters/filters.component';
import { ContractTableComponent } from './components/contract-table/contract-table.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';

@NgModule({
  declarations: [
    ContractsPageComponent,
    FiltersComponent,
    ContractTableComponent,
    DropDownComponent,
  ],
  imports: [CommonModule, ContractsRoutingModule, SharedModule],
})
export class ContractsModule {}
