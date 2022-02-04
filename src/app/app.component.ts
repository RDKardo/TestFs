import { Component } from '@angular/core';
//import { writeFileSync, readFileSync } from 'fs';
//import * as fs from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    alert("message");    
  }

}
