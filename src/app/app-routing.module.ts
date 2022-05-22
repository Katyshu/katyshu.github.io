import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TypescriptComponent} from './typescript/typescript.component'
import {MenuComponent} from "./menu/menu.component";

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'typescript',
    component: TypescriptComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
