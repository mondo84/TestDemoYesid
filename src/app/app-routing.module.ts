import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'users',  pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: async () => (await import('./pages/user/user.module')).UserModule
  },
  {
    path: '**',
    redirectTo: 'users'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
