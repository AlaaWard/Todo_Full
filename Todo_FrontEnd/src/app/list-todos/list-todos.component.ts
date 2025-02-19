import { Component, OnInit } from '@angular/core';
import { NgFor, UpperCasePipe, DatePipe, NgIf } from '@angular/common';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public username: string,
    public description: string,
    public isDone: boolean,
    public targetDate: Date) { }

}
@Component({
  selector: 'app-list-todos',
  imports: [NgFor, UpperCasePipe, DatePipe, NgIf],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})


export class ListTodosComponent implements OnInit {
  updateTodo(id: number) {
    this.rr.navigate(["/todo", id]);
  }
  messege: String = "";
  todos: Todo[] = [];
  constructor(private tt: TodoDataService, private rr: Router) { }

  ngOnInit(): void {
    this.refreshpage();
  }
  addTodo() {
    this.rr.navigate(['/todo', -1])
  }
  refreshpage() {
    this.tt.retrivealltodos("alaaward").subscribe(response => {
      console.log(response);
      this.todos = response;
    })

  }
  deleteTodo(id: number, description: string) {
    console.log(`delete todo ${id}`)
    this.tt.deleteTodo('alaaward', id).subscribe(
      response => {
        console.log(response);
        this.messege = `Delete of Todo ( ${description} ) Successfull!`;
        this.refreshpage();
      }
    )
  }
}




