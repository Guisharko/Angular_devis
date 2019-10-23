import {Component, OnInit} from '@angular/core';
import {InterventionService} from '../../services/intervention.service';
import {Intervention} from 'src/app/shared/models/intervention';
import {InterventionsModule} from '../../intervention.module';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-list-intervention',
    templateUrl: './list-intervention.component.html',
    styleUrls: ['./list-intervention.component.scss']
})
export class ListInterventionsComponent implements OnInit {
    collection$: Observable<Intervention[]>;
    interventionHeaders =
        ['Nom',
            'Prénom',
            'Adresse',
            'Ville',
            'Téléphone',
            'Email',
            'Actions'];

    constructor(
        private interventionService: InterventionService,
        private router: Router
    ) {
        this.collection$ = this.interventionService.collection;
    }

    ngOnInit() {
    }

    edit(intervention: Intervention) {
        this.router.navigate(['/interventions', 'edit', intervention.id]);
    }

    delete(intervention: Intervention) {
        this.interventionService.delete(intervention);
    }
}
