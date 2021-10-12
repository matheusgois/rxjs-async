import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService, User } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs-operators';

  users$ = this.service.users$;

  constructor(private service: AppService){
  }
  
  ngOnInit(){
    // this.users$ = ;

  }

}
