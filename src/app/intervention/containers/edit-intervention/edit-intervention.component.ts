import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterventionService } from '../../services/intervention.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Intervention } from 'src/app/shared/models/intervention';

@Component({
  selector: 'app-edit-intervention',
  templateUrl: './edit-intervention.component.html',
  styleUrls: ['./edit-intervention.component.scss']
})
export class EditInterventionComponent implements OnInit {
  intervention$: Observable<Intervention>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private interventionService : InterventionService,
    private router : Router
    ) { }

  ngOnInit() {
    this.intervention$ = this.route.paramMap.pipe(
      switchMap( (params) => {
        this.id = params.get('id')
        return this.interventionService.getIntervention(this.id)
      } )
    )
  }

  editIntervention(intervention){
    this.interventionService.update(this.id, intervention).then(()=> {
      this.router.navigate(['/interventions', 'list'])
    })
  }

}
