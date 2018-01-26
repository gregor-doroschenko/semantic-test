import { Component, OnInit } from '@angular/core';

import 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
      (<any>$('.ui.dropdown')).dropdown();
  }
}
