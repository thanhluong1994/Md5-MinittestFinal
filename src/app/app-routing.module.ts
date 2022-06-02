import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBookComponent} from './book/list-book/list-book.component';
import {CreateBookComponent} from './book/create-book/create-book.component';
import {EditBookComponent} from './book/edit-book/edit-book.component';
import {DeleteBookComponent} from './book/delete-book/delete-book.component';
import {ViewBookComponent} from './book/view-book/view-book.component';


const routes: Routes = [
  {
    path: '',
    component: ListBookComponent
  },
  {
    path: 'create',
    component: CreateBookComponent
  },
  {
    path: 'edit/:id',
    component: EditBookComponent
  },
  {
    path: 'delete/:id',
    component: DeleteBookComponent
  },
  {
    path: 'view/:id',
    component: ViewBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
