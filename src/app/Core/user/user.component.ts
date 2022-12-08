import { Component, OnInit } from '@angular/core';
import {Utulisateur} from "../../Model/Utulisateur";
import {CalculServiceService} from "../Service/calcul-service.service";
import {TodoServiceService} from "../Service/todo-service.service";
import {UserServiceService} from "../Service/user-service.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 /* listUsers!: Utulisateur[];*/
  listUsers:any;
  u!:number;
text!:string;
  constructor(private calcul : CalculServiceService , private user:UserServiceService) { }

  ngOnInit(): void {

    this.user.getuserlist().subscribe(
      (dataa )=>{
        this.listUsers=dataa
      });

    /*
     this.listUsers= [
      {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz"},
      {id: 2, name: "Ervin Howell", username: "Bret", email: "Shanna@melissa.tv"},
      {id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net"}
    ];*/

  }



  getuser(){

   this.u= this.calcul.getNumberOf(this.listUsers, 'username',this.text );
}


}
