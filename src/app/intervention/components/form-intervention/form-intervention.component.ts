import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Intervention } from 'src/app/shared/models/intervention';

@Component({
  selector: 'app-form-intervention',
  templateUrl: './form-intervention.component.html',
  styleUrls: ['./form-intervention.component.scss']
})
export class FormInterventionComponent implements OnInit {
  @Input() initIntervention = new Intervention();
  @Output() submitedForm: EventEmitter<Intervention> = new EventEmitter();

  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm()
    this.myForm.valueChanges.subscribe((data) => console.log(data));
  }

  createForm() {
    this.myForm = this.fb.group({
      nom: [this.initIntervention.nom, Validators.compose([Validators.required])],
      prenom: [this.initIntervention.prenom],
      adresse: [this.initIntervention.adresse,],
      ville: [this.initIntervention.ville, Validators.required],
      telephone: [this.initIntervention.telephone, Validators.required],
      mail: [this.initIntervention.mail]
    })
  }

  register() {
    console.log(this.myForm.value)
    this.submitedForm.emit(this.myForm.value);
    this.myForm.reset()
  }

}
