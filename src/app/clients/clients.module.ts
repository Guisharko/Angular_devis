import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemplatesModule} from '../templates/templates.module';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClientRoutingModule} from './client-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientRoutingModule,
    TemplatesModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
