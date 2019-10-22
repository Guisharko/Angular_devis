import { Component, OnInit} from '@angular/core';
import { interval  } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = { username: '', password: '' }
  myobs$: any;

  constructor(

  ) {
    this.myobs$ = interval(1000).pipe(
      tap((data) => console.log(data))
    )
  }

  ngOnInit() {
  }

  register() {
    console.log(this.user)
  }



}
