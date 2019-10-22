import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { TypePrestation } from 'src/app/shared/enums/type-prestation.enum';
import { PrestationsModule } from '../../prestations.module';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PrestationI } from 'src/app/shared/interfaces/prestation-i';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  typesPrestations = Object.values(TypePrestation);
  collection$: Observable<Prestation[]>;
  prestationHeaders =
  ['Client',
  'Duree',
  'TjmHt',
  'TotalHt',
  'TotalTtc',
  'TVA',
  'Type',
  'Status',
  'Actions']
  constructor(
    private prestationService: PrestationService,
    private router: Router

    ) {
      this.collection$ = this.prestationService.collection;
  }

  ngOnInit() {
  }
  changeType(presta: Prestation, event: any){
    this.prestationService.updateType(presta, event.target.value)
  }
  changeStatus(presta: Prestation, event: any){
    this.prestationService.updateStatus(presta, event.target.value)
  }

  edit(presta: Prestation){
    this.router.navigate(['/prestations', 'edit', presta.id])
  }

  delete(presta: Prestation){
    this.prestationService.delete(presta);
  }
}
