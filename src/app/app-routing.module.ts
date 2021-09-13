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
  },
  {
    path: 'header-empresas',
    loadChildren: () => import('./header-empresas/header-empresas.module').then( m => m.HeaderEmpresasPageModule)
  },
  {
    path: 'ventas-empresa2',
    loadChildren: () => import('./empresas/empresa2/ventas-empresa2/ventas-empresa2.module').then( m => m.VentasEmpresa2PageModule)
  },
  {
    path: 'pedidos-pendientes-empresa1',
    loadChildren: () => import('./empresas/empresa1/ventas/pedidos-pendientes-empresa1/pedidos-pendientes-empresa1.module').then( m => m.PedidosPendientesEmpresa1PageModule)
  },
  {
    path: 'pedidos-rechazados-empresa1',
    loadChildren: () => import('./empresas/empresa1/ventas/pedidos-rechazados-empresa1/pedidos-rechazados-empresa1.module').then( m => m.PedidosRechazadosEmpresa1PageModule)
  },
  {
    path: 'entregas-pendientes-empresa1',
    loadChildren: () => import('./empresas/empresa1/ventas/entregas-pendientes-empresa1/entregas-pendientes-empresa1.module').then( m => m.EntregasPendientesEmpresa1PageModule)
  },
  {
    path: 'entregas-rechazadas-empresa1',
    loadChildren: () => import('./empresas/empresa1/ventas/entregas-rechazadas-empresa1/entregas-rechazadas-empresa1.module').then( m => m.EntregasRechazadasEmpresa1PageModule)
  },
  {
    path: 'ventas-empresa1',
    loadChildren: () => import('./empresas/empresa1/ventas/ventas-empresa1/ventas-empresa1.module').then( m => m.VentasEmpresa1PageModule)
  },
  {
    path: 'devoluciones-empresa1',
    loadChildren: () => import('./empresas/empresa1/ventas/devoluciones-empresa1/devoluciones-empresa1.module').then( m => m.DevolucionesEmpresa1PageModule)
  },
  {
    path: 'auth-empresa1',
    loadChildren: () => import('./empresas/empresa1/ventas/auth-empresa1/auth-empresa1.module').then( m => m.AuthEmpresa1PageModule)
  },
  {
    path: 'home-ventas-empresa1',
    loadChildren: () => import('./empresas/empresa1/ventas/home-ventas-empresa1/home-ventas-empresa1.module').then( m => m.HomeVentasEmpresa1PageModule)
  },  {
    path: 'registro-de-pedido-empresa1',
    loadChildren: () => import('./empresas/empresa1/ventas/registro-de-pedido-empresa1/registro-de-pedido-empresa1.module').then( m => m.RegistroDePedidoEmpresa1PageModule)
  },
  {
    path: 'registro-de-entrega-empresa1',
    loadChildren: () => import('./empresas/empresa1/ventas/registro-de-entrega-empresa1/registro-de-entrega-empresa1.module').then( m => m.RegistroDeEntregaEmpresa1PageModule)
  },
  {
    path: 'registro-de-venta-empresa1',
    loadChildren: () => import('./empresas/empresa1/ventas/registro-de-venta-empresa1/registro-de-venta-empresa1.module').then( m => m.RegistroDeVentaEmpresa1PageModule)
  },
  {
    path: 'pedidos-pendientes-editar',
    loadChildren: () => import('./empresas/empresa1/ventas/pedidos-pendientes-editar/pedidos-pendientes-editar.module').then( m => m.PedidosPendientesEditarPageModule)
  },
  {
    path: 'pendidos-pendientes-ver-imprimir',
    loadChildren: () => import('./empresas/empresa1/ventas/pendidos-pendientes-ver-imprimir/pendidos-pendientes-ver-imprimir.module').then( m => m.PendidosPendientesVerImprimirPageModule)
  },



  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
