import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  @Input() initClient = new Client();
  @Output() submitedForm: EventEmitter<Client> = new EventEmitter();

  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm()
    this.myForm.valueChanges.subscribe((data) => console.log(data));
  }

  createForm() {
    this.myForm = this.fb.group({
      nom: [this.initClient.nom, Validators.compose([Validators.required])],
      prenom: [this.initClient.prenom],
      adresse: [this.initClient.adresse,],
      ville: [this.initClient.ville, Validators.required],
      telephone: [this.initClient.telephone, Validators.required],
      mail: [this.initClient.mail]
    })
  }

  register() {
    console.log(this.myForm.value)
    this.submitedForm.emit(this.myForm.value);
    this.myForm.reset()
  }

}
