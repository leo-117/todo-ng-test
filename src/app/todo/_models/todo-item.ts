export type TodoItemStatus = 'todo' | 'completed';

export interface TodoItem {
    id: string;
    text: string;
    status: TodoItemStatus;
}
