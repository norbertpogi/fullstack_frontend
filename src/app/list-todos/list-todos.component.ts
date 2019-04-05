import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: any,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
todos: Todo[];

  // todos = [
  //   new Todo(1, 'Learn to dance', false, new Date()),
  //   new Todo(2, 'become expert at angular', false, new Date()),
  //   new Todo(3, 'Visit philippines', false, new Date()),
  // ];

  username: any;
  successfullMessage: any;

  constructor(
    private todoService: TodoDataService,
  ) { }

  ngOnInit() {
   this.refreshTodoList();
  }

  refreshTodoList() {
    const username = 'test test test';
    this.todoService.retrieveAllTOdos(username).subscribe(response => {
      this.todos = response;
    });
  }

  deleteTodo(id) {
    this.todoService.deleteTodoById( 'norbert', id).subscribe(response => {
      this.successfullMessage = `delete of todo item with id ${id} is Successfull`;
      this.refreshTodoList();
    });
  }

  updateTodo(id) {
    console.log('...................... ', id);
  }

}
