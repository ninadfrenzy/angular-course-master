import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }


  sendPost(data: any) {
    let req = this.httpClient.post('https://61e25c7f3050a10017682157.mockapi.io/posts', data);
    req.subscribe({
      next: (res) => {
        console.log(res);
        
      }
    })
  }
  getPosts(){
    let req = this.httpClient.get('https://61e25c7f3050a10017682157.mockapi.io/posts');
    return req;
  }
}
