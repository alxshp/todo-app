import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TodoStore, TodoState } from './todo.state';
import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoQuery extends QueryEntity<TodoState, Todo> {
  constructor(protected override store: TodoStore) {
    super(store);
  }

  selectActiveTodos(): Observable<Todo[]> {
    return this.selectAll({
      filterBy: entity => !entity.completed
    });
  }

  selectCompletedTodos(): Observable<Todo[]> {
    return this.selectAll({
      filterBy: entity => entity.completed
    });
  }
}
