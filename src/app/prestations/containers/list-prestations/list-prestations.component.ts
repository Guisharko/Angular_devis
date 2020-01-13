import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { TypePrestation } from 'src/app/shared/enums/type-prestation.enum';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {Client} from '../../../shared/models/client';
import {ClientService} from '../../../clients/services/client.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  typesPrestations = Object.values(TypePrestation);
  collection$: Observable<Prestation[]>;
  searchText;
  clientName: Client;

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
    private router: Router,
    private modalService: NgbModal,
    private clientService: ClientService,
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
  openSm(content) {
    this.modalService.open(content, {size: 'sm'});
  }

  delete(presta: Prestation){
    this.prestationService.delete(presta);
  }
  getName(id) {
    this.clientService.getClient(id).subscribe(snap => {
      this.clientName = snap;
    });
    return this.clientName.nom.toUpperCase() + ' ' + this.clientName.prenom.charAt(0).toUpperCase() + this.clientName.prenom.slice(1) ;
  }
}
