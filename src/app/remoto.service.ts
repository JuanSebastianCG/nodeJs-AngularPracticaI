import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ihtpp } from './Ihttp';

@Injectable({
  providedIn: 'root'
})
export class RemotoService {

  constructor(private datos : HttpClient) { }
  public getDatos(){

    return this.datos.get<Ihtpp[]>("http://jsonplaceholder.typicode.com/posts");
    /* .subscribe(data => { console.log(data) }); */
  }

}
