import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInterventionComponent } from './containers/add-intervention/add-intervention.component';
import { EditInterventionComponent } from './containers/edit-intervention/edit-intervention.component';
import { ListInterventionsComponent } from './containers/list-intervention/list-intervention.component';


const routes: Routes = [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add', component: AddInterventionComponent },
      { path: 'list', component: ListInterventionsComponent },
      { path: 'edit/:id', component: EditInterventionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterventionRoutingModule { }
