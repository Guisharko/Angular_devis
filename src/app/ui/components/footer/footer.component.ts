import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import *  as moment from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  status$: any;
  dateOfToday = moment();

  constructor(private menuService: MenuService) {
    this.status$ = this.menuService.status$;
   }

  ngOnInit() {

  }

  toggle(){
    this.menuService.toggle()
  }

}
