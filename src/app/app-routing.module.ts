import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportarCandidatosComponent } from './components/importar-candidatos/importar-candidatos.component';
import { ContarPorEstadoComponent } from './components/contar-por-estado/contar-por-estado.component';
import { ImcMedioComponent } from './components/imc-medio/imc-medio.component';
import { PercentualObesosComponent } from './components/percentual-obesos/percentual-obesos.component';
import { MediaIdadeComponent } from './components/media-idade/media-idade.component';
import { DoadoresTipoSanguineoComponent } from './components/doadores-tipo-sanguineo/doadores-tipo-sanguineo.component';
import { LoginComponent } from './components/login/login.component'; // Importe seu componente de Login
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Rota para o componente de login
  { path: 'importar', component: ImportarCandidatosComponent, canActivate: [AuthGuard] }, // Protegida
  { path: 'contar-por-estado', component: ContarPorEstadoComponent, canActivate: [AuthGuard] }, // Protegida
  { path: 'imc-medio', component: ImcMedioComponent, canActivate: [AuthGuard] }, // Protegida
  { path: 'percentual-obesos', component: PercentualObesosComponent, canActivate: [AuthGuard] }, // Protegida
  { path: 'media-idade', component: MediaIdadeComponent, canActivate: [AuthGuard] }, // Protegida
  { path: 'doadores-tipo-sanguineo', component: DoadoresTipoSanguineoComponent, canActivate: [AuthGuard] }, // Protegida
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para a página de login por padrão
  { path: '**', redirectTo: '/login' } // Redireciona qualquer rota desconhecida para login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
