import {RouterModule, Routes} from '@angular/router';
import { CupcakeIndexComponent } from './cupcake-index/cupcake-index.component';
import {CupcakeOrderComponent} from "./cupcake-order/cupcake-order.component";
import {CupcakeConfirmComponent} from "./cupcake-confirm/cupcake-confirm.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {path: '', component: CupcakeIndexComponent},
  {path: 'order', component: CupcakeOrderComponent},
  {path: 'confirm', component: CupcakeConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
