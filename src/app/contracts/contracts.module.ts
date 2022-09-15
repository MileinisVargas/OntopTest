import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsPageComponent } from './contracts-page/contracts-page.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SharedModule } from '../shared/shared.module';
import { ContractTableComponent } from './components/contract-table/contract-table.component';

@NgModule({
  declarations: [ContractsPageComponent, FiltersComponent, ContractTableComponent],
  imports: [CommonModule, ContractsRoutingModule, SharedModule],
})
export class ContractsModule {}
