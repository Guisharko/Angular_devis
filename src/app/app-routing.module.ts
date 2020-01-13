import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [

  { path: 'clients',
    loadChildren: () =>
        import('./clients/clients.module').then( (m) => m.ClientsModule) },
  { path: 'interventions',
    loadChildren: () =>
        import('./intervention/intervention.module').then( (m) => m.InterventionsModule) },
  { path: 'prestations',
    loadChildren: () =>
      import('./prestations/prestations.module').then( (m) => m.PrestationsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
