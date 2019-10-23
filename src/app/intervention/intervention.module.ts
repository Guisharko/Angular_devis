import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplatesModule} from '../templates/templates.module';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InterventionRoutingModule} from './intervention-routing.module';
import {ListInterventionsComponent} from './containers/list-intervention/list-intervention.component';
import {AddInterventionComponent} from './containers/add-intervention/add-intervention.component';
import {EditInterventionComponent} from './containers/edit-intervention/edit-intervention.component';
import {FormInterventionComponent} from './components/form-intervention/form-intervention.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {ClientsModule} from '../clients/clients.module';


@NgModule({
  declarations: [
    ListInterventionsComponent, AddInterventionComponent, EditInterventionComponent, FormInterventionComponent
  ],
  imports: [
    CommonModule,
    InterventionRoutingModule,
    TemplatesModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    ClientsModule
  ]
})
export class InterventionsModule {
}
