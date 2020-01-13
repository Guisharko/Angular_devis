import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { faBars} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  status: boolean;


  constructor(
    private menuService: MenuService) {
       this.menuService.status$
       .subscribe((data) => this.status = data);
    }

  ngOnInit() {
  }

  toggle(event) {
     this.menuService.toggle();
  }

}
