import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient,
  ) { }

  retrieveAllTOdos(username) {
    const endpoint = `http://localhost:8080/users/${username}/todos`;
    return this.http.get<Todo[]>(endpoint);
  }

  deleteTodoById(username, id) {
    const endpoint = `http://localhost:8080/users/${username}/todos/${id}`;
    return this.http.delete<Todo[]>(endpoint);
  }

}
