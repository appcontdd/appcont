import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login-page-proveedor',
    loadChildren: () => import('./login-page-proveedor/login-page-proveedor.module').then( m => m.LoginPageProveedorPageModule)
  },
  {
    path: 'solicitud-de-registro',
    loadChildren: () => import('./solicitud-de-registro/solicitud-de-registro.module').then( m => m.SolicitudDeRegistroPageModule)
  },
  {
    path: 'olvido-pagina',
    loadChildren: () => import('./olvido-pagina/olvido-pagina.module').then( m => m.OlvidoPaginaPageModule)
  },
  {
    path: 'confirmacion-nuevo-proveedor',
    loadChildren: () => import('./confirmacion-nuevo-proveedor/confirmacion-nuevo-proveedor.module').then( m => m.ConfirmacionNuevoProveedorPageModule)
  },
  {
    path: 'proveedorualsje564sde554asd5asd',
    loadChildren: () => import('./confirmacion-envio-solicitud/confirmacion-envio-solicitud.module').then( m => m.ConfirmacionEnvioSolicitudPageModule)
  },
  {
    path: 'proveedortasetwewdgf4543asd56asd',
    loadChildren: () => import('./registro/proveedor/proveedor.module').then( m => m.ProveedorPageModule)
  },
  {
    path: 'proveedorersfdsfd785vdf4ds5ffdss6',
    loadChildren: () => import('./registro/proveedor2/proveedor2.module').then( m => m.Proveedor2PageModule)
  },
  {
    path: 'proveedorbasd3asdad54da65ddsa687ds8fds',
    loadChildren: () => import('./registro/proveedor3/proveedor3.module').then( m => m.Proveedor3PageModule)
  },
  {
    path: 'proveedorlwds585sad6321aw0asd654aw5jy',
    loadChildren: () => import('./registro/proveedor4/proveedor4.module').then( m => m.Proveedor4PageModule)
  },
  {
    path: 'proveedortsdew54f3298jy68i541asv1jyuw3',
    loadChildren: () => import('./registro/proveedor5/proveedor5.module').then( m => m.Proveedor5PageModule)
  },
  {
    path: 'proveedorq5e1gd4tre6d3fg1df7try564dfg3',
    loadChildren: () => import('./registro/proveedor6/proveedor6.module').then( m => m.Proveedor6PageModule)
  },  {
    path: 'header-empresas',
    loadChildren: () => import('./header-empresas/header-empresas.module').then( m => m.HeaderEmpresasPageModule)
  },


  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
