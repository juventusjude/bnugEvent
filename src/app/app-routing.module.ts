import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mint2Component } from './mint2/mint2.component';

const routes: Routes = [{path:"",component:Mint2Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
