import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: any,
    public done: boolean,
    public targetDate: Date,
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn to dance', false, new Date()),
    new Todo(2, 'become expert at angular', false, new Date()),
    new Todo(3, 'Visit philippines', false, new Date()),
  ];

  constructor() { }

  ngOnInit() {
  }

}
