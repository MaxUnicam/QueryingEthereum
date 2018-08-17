import { Component, OnInit } from '@angular/core';

import { Querist } from '../../shared/services/interfaces/iquerist';

@Component({
  selector: 'app-query-results',
  templateUrl: './query-results.component.html',
  styleUrls: ['./query-results.component.css']
})
export class QueryResultsComponent implements OnInit {

  private isQuerying: Boolean = false;

  constructor(private querist: Querist) { }

  ngOnInit() {
    this.isQuerying = true;
    this.querist.executeQuery().subscribe(
      (value: any) => console.log(value),
      (msg) => console.log('Error executing query: ', msg),
      () => this.isQuerying = false
    );
  }

}
