import { TestBed } from '@angular/core/testing';

import { TodoStoreService } from './todo-store.service';

describe('TodoStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoStoreService = TestBed.get(TodoStoreService);
    expect(service).toBeTruthy();
  });
});
