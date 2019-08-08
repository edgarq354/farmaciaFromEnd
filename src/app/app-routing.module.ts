import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'farmacia',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'bienvenido', loadChildren: './bienvenido/bienvenido.module#BienvenidoPageModule' },
  { path: 'farmacia', loadChildren: './farmacia/farmacia.module#FarmaciaPageModule' },
  { path: 'registrar-usuario', loadChildren: './registrar-usuario/registrar-usuario.module#RegistrarUsuarioPageModule' },
  { path: 'verificar-numero', loadChildren: './verificar-numero/verificar-numero.module#VerificarNumeroPageModule' },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
  { path: 'perfil-farmacia/:id', 
  loadChildren: './perfil-farmacia/perfil-farmacia.module#PerfilFarmaciaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
