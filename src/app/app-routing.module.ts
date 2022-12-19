import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },  // 萬用路徑，路由沒有比對到，永遠會執行  註解快捷鍵 ctrl+?


  { path: 'form', component: FormComponent },
  { path: 'table', component: TableComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'sidenav', component: SidenavComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
