import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {
  client$: Observable<Client>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private clientService : ClientService,
    private router : Router
    ) { }

  ngOnInit() {
    this.client$ = this.route.paramMap.pipe(
      switchMap( (params) => {
        this.id = params.get('id')
        return this.clientService.getClient(this.id)
      } )
    )
  }

  editClient(client){
    this.clientService.update(this.id, client).then(()=> {
      this.router.navigate(['/clients', 'list'])
    })
  }

}
