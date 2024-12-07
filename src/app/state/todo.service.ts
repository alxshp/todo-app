import { Injectable } from '@angular/core';
import { TodoStore } from './todo.state';
import { Todo } from '../models/todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private todoStore: TodoStore) {}

  add(todo: Todo) {
    this.todoStore.add(todo);
  }

  update(id: number, todo: Partial<Todo>) {
    this.todoStore.update(id, todo);
  }

  remove(id: number) {
    this.todoStore.remove(id);
  }
}
