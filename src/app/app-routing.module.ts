import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiswalistComponent } from './component/siswa/siswalist/siswalist.component';
import { SiswadetailComponent } from './component/siswa/siswadetail/siswadetail.component';
import { authGuard } from './helpers/auth.guard';
import { LoginPageComponent } from './component/login-page/login-page.component';

const routes: Routes = [
  {
    path : "",
    component : SiswalistComponent,
    canActivate : [authGuard]
  },
  {
    path : "login",
    component : LoginPageComponent
  },
  {
    path : "siswalist",
    component : SiswalistComponent,
    canActivate : [authGuard]
  },
  {
    path : "siswalist/siswadetail",
    component : SiswadetailComponent,
    canActivate : [authGuard]
  },
  {
    path : "siswalist/siswadetail/:id",
    component : SiswadetailComponent,
    canActivate : [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
