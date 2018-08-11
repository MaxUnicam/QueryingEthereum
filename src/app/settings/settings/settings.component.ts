import { Component, OnInit } from '@angular/core';

import { Settings } from '../isettings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private settings: Settings) { }

  ngOnInit() {

  }

}
