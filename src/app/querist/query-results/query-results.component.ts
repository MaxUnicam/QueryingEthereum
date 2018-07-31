import { Component, OnInit } from '@angular/core';

import { DataProvider } from '../../shared/services/idataprovider';

import { Querist } from '../../shared/services/iquerist';
import { Query } from '../../shared/models/query';

@Component({
  selector: 'app-query-results',
  templateUrl: './query-results.component.html',
  styleUrls: ['./query-results.component.css']
})
export class QueryResultsComponent implements OnInit {

  private query: Query;
  private isQuerying: Boolean = false;

  constructor(private querist: Querist, private provider: DataProvider) {
    this.query = this.querist.query;
  }

  ngOnInit() {
    if (!this.query) {
      return;
    }

    this.isQuerying = true;
    this.querist.executeQuery(this.query);
    this.isQuerying = false;
  }

}
