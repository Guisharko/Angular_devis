import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauComponent } from './components/tableau/tableau.component';
import { TotalPipe } from './pipes/total.pipe';
import { ClientNamePipe } from './pipes/client-name.pipe';



@NgModule({
  declarations: [TableauComponent, TotalPipe, ClientNamePipe],
  imports: [
    CommonModule
  ],
  exports: [TableauComponent, TotalPipe]
})
export class SharedModule { }
