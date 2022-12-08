import { Component, OnInit } from '@angular/core';
import {todo} from "../../Model/todo";
import {CalculServiceService} from "../Service/calcul-service.service";
import {TodoServiceService} from "../Service/todo-service.service";


@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
listTodo!: any;
//listTodo:todo[]
 c!:number;
  constructor(private calcul : CalculServiceService , private todo:TodoServiceService) { }
  ngOnInit(): void {
    this.todo.gettodolist().subscribe(
      (data )=>{
        this.listTodo=data
      });
    /*
    this.listTodo = [
      {userId: 1, id: 1, title: 'task1' , completed:true},
      {userId: 1, id: 2, title: 'task2' , completed:true},
      {userId: 2, id: 3, title: 'task1' , completed:true},
      {userId: 3, id: 4, title: 'task1' , completed:false}
    ];*/
  }
gettodo(){
   this.c = this.calcul.getNumberOf(this.listTodo,'completed',true)
}

}
