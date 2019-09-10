import { Injectable } from '@angular/core';
import { TodoItem } from '../../../../_models/todo-item';
import { Subject, Observable } from 'rxjs';
import { cloneDeep } from 'lodash';
import { Store } from 'src/app/todo/_models/store/store';

@Injectable({
  providedIn: 'root'
})
export class MyStoreService implements Store<TodoItem> {

  private items: Array<TodoItem>;
  private sbtItems: Subject<Array<TodoItem>>;
  constructor() {
    this.sbtItems = new Subject();
    this.items = [];
  }

  public insert(newTodoItem: TodoItem): void {
    this.items.push(newTodoItem);
    this.sbtItems.next(cloneDeep(this.items));
  }

  public update(updatedItem: TodoItem): TodoItem {
    const index = this.findIndexById(updatedItem.id);
    if (index === -1) {
      return;
    }
    this.items[index] = updatedItem;
    this.sbtItems.next(this.items);
    return updatedItem;
  }

  public delete(id: string): boolean {
    const index: number =  this.findIndexById(id);
    if (index === -1) {
      return false;
    }
    this.items.splice(index, 1);
    this.sbtItems.next(cloneDeep(this.items));
    return true;
  }

  public reset(): void {

  }

  public deleteByPredicate(predicate: (item: TodoItem) => boolean): void {
    this.items = this.items.filter((item: TodoItem) => !predicate(item));
    this.sbtItems.next(this.items);
  }

  public filterByPredicate(predicate: (item: TodoItem) => boolean): void {
    this.sbtItems.next(this.items.filter((item: TodoItem) => predicate(item)));
  }

  public onLoadItems(): Observable<Array<TodoItem>> {
    return this.sbtItems.asObservable();
  }

  private findIndexById(id: string): number {
    return this.items.findIndex((item: TodoItem) => item.id === id);
  }

}
