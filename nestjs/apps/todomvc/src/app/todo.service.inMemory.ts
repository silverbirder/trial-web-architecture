import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {Observable} from 'rxjs';

@Injectable()
export class TodoServiceInMemory {
    private todos: Todo[] = [];
    count: number = 0;

    search(text): Observable<Todo[]> {
        const fd: Todo[] = this.todos.filter(t => {
            return new RegExp(text).test(t.title);
        });
        return new Observable((observer) => {
            observer.next(fd);
        })
    };

    // Simulate GET /todos
    getAllTodos(): Observable<Todo[]> {
        return new Observable((observer) => {
            observer.next(JSON.parse(JSON.stringify(this.todos)));
        });
    }

    // Simulate POST /todos
    addTodo(todo: Todo): Observable<Todo> {
        todo._id = this.count++;
        this.todos.push(todo);
        return new Observable((observer) => {
            observer.next(todo);
        });
    }

    // Simulate DELETE /todos/:id
    deleteTodoById(id: number): Observable<Todo> {
        const tn: number = this.todos.findIndex(t => t._id === id);
        const dt: Todo = this.todos[tn];
        this.todos.splice(tn, 1);
        return new Observable((observer) => {
            observer.next(dt);
        });
    }

    // Simulate Patch
    updateTodo(todo: Todo): Observable<Todo> {
        this.todos.map((t, index) => {
            if (t._id === todo._id) {
                this.todos[index] = todo;
            }
        });
        return new Observable((observer) => {
            observer.next(todo);
        });
    }
}
