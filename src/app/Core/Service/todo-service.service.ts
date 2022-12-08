import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {todo} from "../../Model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
//injection de httpclient
  constructor(private  http:HttpClient) {}

  gettodolist(){
return this.http.get<todo>('http://localhost:3000/Todo');
  }
}
