import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

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
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'localizacion',
    loadChildren: () => import('./localizacion/localizacion.module').then( m => m.LocalizacionPageModule)
  },
  {
    path: 'logintest',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./components/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./components/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'obra',
    loadChildren: () => import('./components/obra/obra.module').then( m => m.ObraPageModule)
  },
  {
    path: 'cotizacion',
    loadChildren: () => import('./components/cotizacion/cotizacion.module').then( m => m.CotizacionPageModule)
  },
  {
    path: 'contact-artesano',
    loadChildren: () => import('./components/contact-artesano/contact-artesano.module').then( m => m.ContactArtesanoPageModule)
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
    path: 'view-artesano',
    loadChildren: () => import('./components/view-artesano/view-artesano.module').then( m => m.ViewArtesanoPageModule)
  },
  {
    path: 'log-in-artesano',
    loadChildren: () => import('./components/log-in-artesano/log-in-artesano.module').then( m => m.LogInArtesanoPageModule)
  },
  {
    path: 'registro-artesano',
    loadChildren: () => import('./components/registro-artesano/registro-artesano.module').then( m => m.RegistroArtesanoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
