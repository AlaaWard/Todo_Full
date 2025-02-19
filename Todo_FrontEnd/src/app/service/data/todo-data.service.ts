import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';
import { API_URL, JPA_API_URL } from '../../app.constant';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService implements OnInit {
  updateTodo(arg0: string, id: number, todo: Todo) {
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {

  }
  constructor(private http: HttpClient) {


  }
  // creatbasicauthhttpheader() {
  //   let username = "alaaward"
  //   let password = "ward"
  //   let basicauthheaderstring = 'Basic ' + window.btoa(username + ":" + password)
  //   return basicauthheaderstring
  // }



  retrivealltodos(username: string) {

    return this.http.get<Todo[]>(`${JPA_API_URL}/users/${username}/todos`);

  }
  deleteTodo(username: string, id: number) {

    return this.http.delete(`${JPA_API_URL}/users/${username}/todos/${id}`);
  }
  retriveTodo(username: string, id: number) {

    return this.http.get<Todo>(`${JPA_API_URL}/users/${username}/todos/${id}`);
  }
  putTodo(username: string, id: number, todo: Todo) {

    return this.http.put(`${JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }
  createTodo(username: string, todo: Todo) {

    return this.http.post(`${JPA_API_URL}/users/${username}/todos`, todo);
  }

}
