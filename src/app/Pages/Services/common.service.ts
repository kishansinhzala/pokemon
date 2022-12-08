import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/@Shared/constants/app.constant';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  onGetData(){
    return this.http.get(`${Constants.apiUrl}/pokemon?limit=20&offset=0`)
  }

}
