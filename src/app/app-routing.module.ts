import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NumbersComponent } from './numbers/numbers.component';


const routes: Routes = [
  { path:'', component: NumbersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
