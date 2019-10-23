import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemplatesModule} from '../templates/templates.module';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClientRoutingModule} from './client-routing.module';
import {ListClientsComponent} from './containers/list-client/list-client.component';
import {AddClientComponent} from './containers/add-client/add-client.component';
import {EditClientComponent} from './containers/edit-client/edit-client.component';
import {FormClientComponent} from './components/form-client/form-client.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ListClientsComponent,AddClientComponent,EditClientComponent,FormClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    TemplatesModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ClientsModule { }
