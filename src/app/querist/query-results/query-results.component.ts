import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';

import { ExportDialogComponent } from '../export-dialog/export-dialog.component';

import { Querist } from '../../shared/services/interfaces/iquerist';
import { FileContentGenerator } from '../../shared/services/interfaces/ifilecontentgenerator';

@Component({
  selector: 'app-query-results',
  templateUrl: './query-results.component.html',
  styleUrls: ['./query-results.component.css']
})
export class QueryResultsComponent implements OnInit {

  public isQuerying: Boolean = false;

  constructor(
    public querist: Querist,
    public fileGenerator: FileContentGenerator,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.isQuerying = true;
    this.querist.executeQuery().subscribe(
      (value: any) => { console.log(value); } ,
      (msg) => console.log('Error executing query: ', msg),
      () => this.isQuerying = false
    );
  }

  public downloadData() {
    const dialogRef = this.dialog.open(ExportDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'json') {
        this.exportJson();
      } else if (result == 'csv') {
        this.exportCsv();
      }
    });
  }

  private exportJson() {
    const data = this.querist.queryResult;
    const fileContent = this.fileGenerator.generateJson(data);
    const uri = encodeURI("data:application/json;charset=utf-8," + fileContent);
    this.startFileDownload(uri, "querying-ethereum-export.json");
  }

  private exportCsv() {
    const data = this.querist.queryResult;
    const properties = this.querist.query.desiredProperties;
    const fileContent = this.fileGenerator.generateCsv(data, properties);
    const uri = encodeURI("data:text/csv;charset=utf-8," + fileContent);
    this.startFileDownload(uri, "querying-ethereum-export.csv");
  }

  private startFileDownload(encodedUri: string, fileName: string) {
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", fileName);
    link.hidden = true;
    document.body.appendChild(link); // Required for FF
    link.click();
  }

}
