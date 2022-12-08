import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {todo} from "../../Model/todo";
import {Utulisateur} from "../../Model/Utulisateur";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private  http1:HttpClient) { }

  getuserlist(){
    return this.http1.get<Utulisateur>("http://localhost:3000/user");
  }
}
