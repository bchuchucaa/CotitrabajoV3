import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'view-cliente',
    loadChildren: () => import('./components/view-cliente/view-cliente.module').then( m => m.ViewClientePageModule)
  },
  {
    path: 'view-cliente/:uid',
    loadChildren: () => import('./components/view-cliente/view-cliente.module').then( m => m.ViewClientePageModule)
  },
  {
    path: 'crear-obra',
    loadChildren: () => import('./components/crear-obra/crear-obra.module').then( m => m.CrearObraPageModule)
  },
  {
    path: 'crear-obra/:uid',
    loadChildren: () => import('./components/crear-obra/crear-obra.module').then( m => m.CrearObraPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./components/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'registro-cliente',
    loadChildren: () => import('./components/registro-cliente/registro-cliente.module').then( m => m.RegistroClientePageModule)
  },
  {
    path: 'registro-artesano',
    loadChildren: () => import('./components/registro-artesano/registro-artesano.module').then( m => m.RegistroArtesanoPageModule)
  },
  {
    path: 'view-artesano',
    loadChildren: () => import('./components/view-artesano/view-artesano.module').then( m => m.ViewArtesanoPageModule)
  },
  {
    path: 'login-artesano',
    loadChildren: () => import('./components/log-in-artesano/log-in-artesano.module').then( m => m.LogInArtesanoPageModule)
  },  {
    path: 'cotizacion',
    loadChildren: () => import('./components/cotizacion/cotizacion.module').then( m => m.CotizacionPageModule)
  },
  {
    path: 'lis-cotizaciones-artesano',
    loadChildren: () => import('./components/lis-cotizaciones-artesano/lis-cotizaciones-artesano.module').then( m => m.LisCotizacionesArtesanoPageModule)
  },
  {
    path: 'lis-cotizaciones-cliente',
    loadChildren: () => import('./components/lis-cotizaciones-cliente/lis-cotizaciones-cliente.module').then( m => m.LisCotizacionesClientePageModule)
  },
  {
    path: 'contact-artesano',
    loadChildren: () => import('./components/contact-artesano/contact-artesano.module').then( m => m.ContactArtesanoPageModule)
  },
  {
    path: 'notificaciones-push',
    loadChildren: () => import('./components/notificaciones-push/notificaciones-push.module').then( m => m.NotificacionesPushPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
