import { Component, OnInit } from '@angular/core';
import { Intervention } from 'src/app/shared/models/intervention';
import { InterventionService } from '../../services/intervention.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-intervention',
  templateUrl: './add-intervention.component.html',
  styleUrls: ['./add-intervention.component.scss'],
  providers: [ ]
})
export class AddInterventionComponent implements OnInit {

  constructor(
    private interventionService: InterventionService,
    private router: Router


    ) { }

  ngOnInit() {
  }

  addIntervention(event: Intervention) {
      this.interventionService.add(event).then( () => {
        this.router.navigate(['/interventions', 'list'])
      })
  }

}
