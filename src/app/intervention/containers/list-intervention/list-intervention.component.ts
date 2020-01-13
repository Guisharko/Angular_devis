import {Component, OnInit} from '@angular/core';
import {InterventionService} from '../../services/intervention.service';
import {Intervention} from 'src/app/shared/models/intervention';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Client} from '../../../shared/models/client';
import {ClientService} from '../../../clients/services/client.service';

@Component({
  selector: 'app-list-intervention',
  templateUrl: './list-intervention.component.html',
  styleUrls: ['./list-intervention.component.scss']
})
export class ListInterventionsComponent implements OnInit {
  collection$: Observable<Intervention[]>;
  clientName: Client;
  interventionHeaders =
    ['Client',
      'Description',
      'Actions'];

  constructor(
    private interventionService: InterventionService,
    private router: Router,
    private modalService: NgbModal,
    private clientService: ClientService,
  ) {
    this.collection$ = this.interventionService.collection;
  }

  searchText;

  openSm(content) {
    this.modalService.open(content, {size: 'sm'});
  }

  ngOnInit() {
  }

  edit(intervention: Intervention) {
    this.router.navigate(['/interventions', 'edit', intervention.id]);
  }

  delete(intervention: Intervention) {
    this.interventionService.delete(intervention);
  }

  getName(id) {
    this.clientService.getClient(id).subscribe(snap => {
      this.clientName = snap;
    });
    return this.clientName.nom.toUpperCase() + ' ' + this.clientName.prenom.charAt(0).toUpperCase() + this.clientName.prenom.slice(1) ;
  }
}
