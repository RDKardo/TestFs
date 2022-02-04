declare var require: any
const fs = require('fs');
import { Component, OnInit } from '@angular/core';
//import { writeFileSync, readFileSync } from 'fs';
//import * as fs from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'test';
    fs = require('fs');

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    alert("message");    
    
       fs.readFileSync('C:\Users\RMontañoA\Documents\Nueva carpeta\LogTxt.txt','utf8')
      //fs.appendFileSync('C:\Users\RMontañoA\Documents\Nueva carpeta\LogTxt.txt', 'data to append');
  }

}
