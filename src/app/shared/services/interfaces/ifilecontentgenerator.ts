import { Injectable } from '@angular/core';


export interface IFileContentGenerator {

  generateCsv(data: any[], properties: string[]): string;

  generateJson(data: any[]): string;

}


@Injectable()
export abstract class FileContentGenerator implements IFileContentGenerator {

  abstract generateCsv(data: any[], properties: string[]): string;

  abstract generateJson(data: any[]): string;

}
