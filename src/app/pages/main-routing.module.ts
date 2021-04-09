import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { MainComponent } from './main.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: MainComponent,
        canActivate: [ AuthGuard ],
        children: [
            { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
            { path: 'grafica1', component: Grafica1Component, data: { title: 'Grafica' } },
            { path: 'progress', component: ProgressComponent, data: { title: 'Progress' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Ajustes de Cuenta' } },
            { path: 'promesas', component: PromesasComponent, data: { title: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { title: 'Rxjs' } },
            { path: 'perfil', component: PerfilComponent, data: { title: 'Perfil' } },

            // mantenimientos
            { path: 'usuarios', component: UsuariosComponent, data: { title: 'Usuarios de aplicación' } },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
