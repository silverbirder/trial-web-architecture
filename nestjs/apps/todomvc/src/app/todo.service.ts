import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TodoService {
    constructor(private http: HttpClient) {
    }

    search(text): Observable<Todo[]> {
        return this.http.get<Todo[]>('tasks/search?title=' + text);
    }

    // Simulate GET /todos
    getAllTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>('tasks');
    }

    // Simulate POST /todos
    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>('tasks', todo);
    }

    // Simulate DELETE /todos/:id
    deleteTodoById(id: number): Observable<Todo> {
        return this.http.delete<Todo>('tasks/' + id);
    }

    // Simulate Patch
    updateTodo(todo: Todo) {
        return this.http.patch<Todo>('tasks', todo);
    }
}
