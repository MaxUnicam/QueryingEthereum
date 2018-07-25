import { Component, OnInit } from '@angular/core';

import { Querist } from '../../shared/services/iquerist';

@Component({
  selector: 'app-query-results',
  templateUrl: './query-results.component.html',
  styleUrls: ['./query-results.component.css']
})
export class QueryResultsComponent implements OnInit {

  constructor(private querist: Querist) { }

  ngOnInit() {

  }

}
