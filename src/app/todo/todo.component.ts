import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodoQuery } from '../state/todo.query';
import { TodoService } from '../state/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos$: Observable<Todo[]>;
  newTodoTitle: string = '';
  filter: 'all' | 'active' | 'completed' = 'all';

  constructor(private todoQuery: TodoQuery, private todoService: TodoService) {
    this.todos$ = this.todoQuery.selectAll();
  }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    if (this.filter === 'all') {
      this.todos$ = this.todoQuery.selectAll();
    } else if (this.filter === 'active') {
      this.todos$ = this.todoQuery.selectActiveTodos();
    } else {
      this.todos$ = this.todoQuery.selectCompletedTodos();
    }
  }

  addTodo(): void {
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.newTodoTitle,
      completed: false
    };
    this.todoService.add(newTodo);
    this.newTodoTitle = '';
    this.loadTodos();
  }

  updateTodoStatus(todo: Todo, event: any): void {
    const completed = event.checked;
    this.todoService.update(todo.id, { completed });
    this.loadTodos();
  }

  deleteTodo(id: number): void {
    this.todoService.remove(id);
    this.loadTodos();
  }
}
