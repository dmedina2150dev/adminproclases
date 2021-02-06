import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// modulos
import { MainRoutingModule } from './pages/main-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

// componentes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [
  // path: '/dashboard' PagesRoutingModule
  // path: '/auth' AuthRoutingModule
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MainRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
