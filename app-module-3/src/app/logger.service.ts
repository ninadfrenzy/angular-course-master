import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  
  constructor() { }

  logInfo(data: any) {
    console.log(data);
  }
  logError(data: any) {
    console.error(data);
  }
  logWarning(data: any) {
    console.warn(data);
  }


}
