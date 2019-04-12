import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../shared/modal/modal.component';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: any,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  todo: Todo;
  id: any;
  isEdit = false;

  username: any;
  successfullMessage: any;

  constructor(
    private todoService: TodoDataService,
    private router: Router
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

  routeUpdateTodo(id) {
    this.router.navigate(['todos', id]);

  }

  deleteTodo(id) {
    this.todoService.deleteTodoById('norbert', id).subscribe(response => {
      this.successfullMessage = `delete of todo item with id ${id} is Successfull`;
      this.refreshTodoList();
    });
  }

  open(todo) {
    this.todo = new Todo(todo.id, '', false, new Date());
    this.todoService.retrieveTOdosById(this.username, todo.id).subscribe(data => {
      this.todo = data;
    });
  }

  showModal(row: any) {
    this.isEdit = true;
    Object.keys(row).forEach(key => {
      this.todos[key] = row[key];
      console.log('1111111111111111111111111 ', this.todos[key]);
    });
  }

  savingTodo(form: NgForm) {
    console.log('11111111111111111111111111 ', form);
    this.todoService.createTodos('norbert', this.todo).subscribe(data => {
      console.log(data);
      this.successfullMessage = `you have created todo in the list`;
      this.refreshTodoList();
    });
  }

  save(todos) {
   // console.log('0000000000000000000 ', form.value);
    console.log('111111111111111111 ', todos);
    if (this.isEdit) {
      console.log('222222222222222222 ', todos);
      this.todoService.updateTOdosById('norbert', todos, todos).subscribe(data => {
        this.successfullMessage = `update of todo item with id ${todos} is Successfull`;
        this.refreshTodoList();
        console.log('3333333333333333333333 ', data);
      });
    }
  }

}
