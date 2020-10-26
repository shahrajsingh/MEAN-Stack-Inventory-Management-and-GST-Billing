import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillsComponent } from '../bills/bills.component';
import { InventoryComponent } from '../inventory/inventory.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bills', component: BillsComponent },
  { path: 'inventory', component: InventoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
