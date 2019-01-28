import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-miner',
  templateUrl: './miner.component.html',
  styleUrls: ['./miner.component.css']
})
export class MinerComponent implements OnInit {

  private currentFile: File;

  lastResult: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  startMining() {
    const formData = new FormData();
    formData.append('file', this.currentFile, this.currentFile.name);

    this.http.post(`http://localhost:8080/mine`, formData, { responseType: 'text' })
        .subscribe(
            data => {
              console.log(data);
              const file = new Blob([data], {type: 'text/xml'});
              const url = window.URL.createObjectURL(file);
              window.open(url);
            },
            error => console.log(error)
        );
  }

  onChange(event) {
    this.currentFile = event.srcElement.files[0];
  }

}
