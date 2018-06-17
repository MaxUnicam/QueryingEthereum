import { Component, OnInit } from '@angular/core';

import { DataProvider } from './shared/services/idataprovider';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'app';

  constructor(private provider: DataProvider) { }

  ngOnInit() {
    this.provider.doStuff();
  }

}
