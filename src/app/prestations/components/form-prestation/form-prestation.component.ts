import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Prestation } from 'src/app/shared/models/prestation';
import { TypePrestation } from 'src/app/shared/enums/type-prestation.enum';
import { StatusPrestation } from 'src/app/shared/enums/status-prestation.enum';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  @Input() initPresta = new Prestation();
  @Output() submitedForm: EventEmitter<Prestation> = new EventEmitter();
  typePrestations = TypePrestation;
  statusPrestations = StatusPrestation;
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm()
    this.myForm.valueChanges.subscribe((data) => console.log(data));
    this.myForm.get('client').valueChanges.pipe(
      filter((val) => val === 'CAPGEMINI')
    )
      .subscribe((data) => {
        const tjmEnCours = this.myForm.get('tjmHt').value;
        this.myForm.get('tjmHt').setValue((tjmEnCours * 10 / 100) + tjmEnCours)
      });
  }

  createForm() {
    this.myForm = this.fb.group({
      type: [this.initPresta.type],
      client: [this.initPresta.client, Validators.compose([Validators.required, Validators.minLength(3)])],
      duree: [this.initPresta.duree, Validators.required],
      tjmHt: [this.initPresta.tjmHt, Validators.required],
      tva: [this.initPresta.tva, Validators.required],
      status: [this.initPresta.status, Validators.required]
    })
  }

  register() {
    console.log(this.myForm.value)
    this.submitedForm.emit(this.myForm.value);
    this.myForm.reset()
  }

}
