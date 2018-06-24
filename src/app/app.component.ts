import { Component, OnInit } from '@angular/core';

import { DataProvider } from './shared/services/idataprovider';
import { Projector } from './shared/services/iprojector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'app';

  constructor(private provider: DataProvider, private projector: Projector) { }

  ngOnInit() {
    // const block = this.provider.getBlock(3);
    // console.log(block);

    // const properties = this.projector.getProperties(block);
    // console.log('Il blocco ha queste proprietà: ' + properties);

    // const app = [properties[0], properties[2], properties[5]];
    // const values = this.projector.getValues(block, app);
    // console.log('Le proprietà ' + app + '\nvalgono ' + values);

    // console.log('App è lungo: ' + this.projector.count(app));
    // console.log('Una stringa è lunga: ' + this.projector.count('cioa'));
    // console.log('Null è lungo: ' + this.projector.count(null));
  }

}
