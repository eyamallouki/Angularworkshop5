import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./Core/user/user.component";
import * as path from "path";
import {ListTodoComponent} from "./Core/list-todo/list-todo.component";

const routes: Routes = [
  {
    path:'listtodo',component:ListTodoComponent
  },
  {
    path:'user',component:UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

/*{
  path:'user',component:UserComponent
}*/

}
