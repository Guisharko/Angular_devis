import {Component, OnInit, Input, Output, EventEmitter, Directive} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Intervention } from 'src/app/shared/models/intervention';
import {Client} from '../../../shared/models/client';
import {Observable} from 'rxjs';
import {ClientService} from '../../../clients/services/client.service';

@Component({
  selector: 'app-form-intervention',
  templateUrl: './form-intervention.component.html',
  styleUrls: ['./form-intervention.component.scss']
})

export class FormInterventionComponent implements OnInit {
  @Input() initIntervention = new Intervention();
  @Output() submitedForm: EventEmitter<Intervention> = new EventEmitter();

  collectionClients$: Observable<Client[]>;
  myForm: FormGroup;
  id: string;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService) {
    this.collectionClients$ = this.clientService.collection;
  }

  ngOnInit() {
    this.createForm()
    this.myForm.valueChanges.subscribe((data) => console.log(data));
  }

  createForm() {
    this.myForm = this.fb.group({
      description: [this.initIntervention.description],
      client: [this.initIntervention.client],
      devis: [this.initIntervention.devis],
    });
  }

  register() {
    console.log(this.myForm.value)
    this.submitedForm.emit(this.myForm.value);
    this.myForm.reset();
  }

  addClient(id) {
    console.log(this.clientService.getClient(id));
  }
}
