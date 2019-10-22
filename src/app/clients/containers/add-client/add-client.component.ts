import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
  providers: [ ]
})
export class AddClientComponent implements OnInit {

  constructor(
    private clientService: ClientService,
    private router: Router


    ) { }

  ngOnInit() {
  }

  addClient(event: Client) {
      this.clientService.add(event).then( () => {
        this.router.navigate(['/clients', 'list'])
      })
  }

}
