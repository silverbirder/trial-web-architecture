import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
    selector: 'ng-console-root',
    templateUrl: 'app.component.html',
    providers: [ TodoService],
    styles: [`
        .m-b {
            margin-bottom: 20px;
        }
    `]
})
export class AppComponent implements OnInit, OnDestroy {
    todos: Todo[] = [];
    status: string = "";
    newTodo: Todo = new Todo();

    constructor(private todoService: TodoService) {}

    ngOnInit() {
        this.todoService.getAllTodos()
            .subscribe(todos => this.todos = todos)
    }

    search(text: string) {
        this.todoService.search(text)
            .subscribe(todos => this.todos = todos)
    }

    addTodo() {
        this.todoService.addTodo(this.newTodo).subscribe(todo => {
            this.todos.push(todo);
        });
        this.newTodo = new Todo();
    }

    toggleTodoComplete(todo: Todo) {
        this.todoService.toggleTodoComplete({...todo, complete: !todo.complete})
            .subscribe(t => todo.complete = t.complete);
    }

    removeTodo(todo) {
        this.todoService.deleteTodoById(todo._id)
            .subscribe(todo => {
                this.todos = this.todos.filter(t => t._id != todo._id);
            });
    }

    getTodosCompleted() {
        return this.todos.filter(t => t.complete);
    }

    removeCompleted() {
        this.todos.filter(t => t.complete).map(t => {
           this.todoService.deleteTodoById(t._id)
               .subscribe(todo => {
                   this.todos = this.todos.filter(t => t._id != todo._id);
               });
        });
    }

    ngOnDestroy() {
        // Unsubscibe
    }
}
