import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from 'src/app/shared/models/client';
import { ClientsModule } from '../../clients.module';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientsComponent implements OnInit {
  collection$: Observable<Client[]>;
  clientHeaders =
  ['Nom',
  'Adresse',
  'Ville',
  'Téléphone',
  'Email',
  'Actions']
  constructor(
    private clientService: ClientService,
    private router: Router

    ) {
      this.collection$ = this.clientService.collection;
  }

  ngOnInit() {
  }

  edit(client: Client){
    this.router.navigate(['/clients', 'edit', client.id])
  }

  delete(client: Client){
    this.clientService.delete(client);
  }
}
