import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestationService } from '../../services/prestation.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
  presta$: Observable<Prestation>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private prestationService : PrestationService,
    private router : Router
    ) { }

  ngOnInit() {
    this.presta$ = this.route.paramMap.pipe(
      switchMap( (params) => {
        this.id = params.get('id')
        return this.prestationService.getPrestation(this.id)
      } )
    )
  }

  editPrestation(presta){
    this.prestationService.update(this.id, presta).then(()=> {
      this.router.navigate(['/prestations', 'list'])
    })
  }

}
