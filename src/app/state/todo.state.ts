import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Todo } from '../models/todo.model';

export interface TodoState extends EntityState<Todo, number> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todos' })
export class TodoStore extends EntityStore<TodoState> {
  constructor() {
    super();
  }
}
