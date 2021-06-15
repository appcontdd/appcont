import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'proveedor',
    loadChildren: () => import('./registro/proveedor/proveedor.module').then( m => m.ProveedorPageModule)
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
    path: 'confirmacion-envio-solicitud',
    loadChildren: () => import('./confirmacion-envio-solicitud/confirmacion-envio-solicitud.module').then( m => m.ConfirmacionEnvioSolicitudPageModule)
  },

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
