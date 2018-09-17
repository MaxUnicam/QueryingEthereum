import { Injectable } from '@angular/core';

import { FileContentGenerator } from './interfaces/ifilecontentgenerator';


@Injectable()
export class ReportGeneratorService extends FileContentGenerator {

  generateCsv(data: any[], properties: string[]): string {
    let content = '';
    properties.forEach((prop) => {
      content += prop;
      if (properties.indexOf(prop) != properties.length - 1) {
        content += ',';
      } else {
        content += '\n';
      }
    });

    data.forEach(item => {
      let row = '';
      properties.forEach(prop => {
        row += item[prop];
        if (properties.indexOf(prop) != properties.length - 1) {
          row += ',';
        } else {
          row += '\n';
        }
      });

      content += row;
    });

    return content;
  }

  generateJson(data: any[]): string {
    return JSON.stringify(data);
  }

}
