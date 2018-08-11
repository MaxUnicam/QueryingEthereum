import { Injectable } from '@angular/core';


export interface ISettings {

  ethereumNodeUrl: string;

}


@Injectable()
export abstract class Settings implements ISettings {

    ethereumNodeUrl: string;

}
