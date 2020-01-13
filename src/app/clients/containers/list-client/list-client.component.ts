import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Client} from 'src/app/shared/models/client';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientsComponent implements OnInit {
  collection$: Observable<Client[]>;
  searchText: string;
  clientHeaders =
    [
      'Nom',
      'Adresse',
      'Ville',
      'Téléphone',
      'Email',
      'Actions'
    ];
  constructor(
    private clientService: ClientService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.collection$ = this.clientService.collection;
  }

  ngOnInit() {
  }

  edit(client: Client) {
    this.router.navigate(['/clients', 'edit', client.id]);
  }

  delete(client: Client) {
    this.clientService.delete(client);
  }
  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }
}
