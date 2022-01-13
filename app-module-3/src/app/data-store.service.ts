import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  message: BehaviorSubject<string> = new BehaviorSubject("");
  constructor(private logService: LoggerService) { }

  setMessage(msg: string, componentName: string) {
    this.message.next(msg);
    this.logService.logInfo({"message": msg, "updated": true, "component": componentName});
  } 
}
