import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauComponent } from './components/tableau/tableau.component';
import { TotalPipe } from './pipes/total.pipe';
import { TypeColorDirective } from './directives/type-color.directive';
import { CpDirective } from './directives/cp.directive';



@NgModule({
  declarations: [TableauComponent, TotalPipe, TypeColorDirective, CpDirective],
  imports: [
    CommonModule
  ],
  exports: [TableauComponent, TotalPipe, TypeColorDirective, CpDirective]
})
export class SharedModule { }
