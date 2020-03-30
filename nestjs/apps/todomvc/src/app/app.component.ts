import {Component, OnInit, OnDestroy} from '@angular/core';
import {Todo} from './todo';
import {NavigationStart, Router} from "@angular/router";
import {TodoServiceInMemory} from "./todo.service.inMemory";

export enum STATUS {
    Free = '',
    Active = 'active',
    Completed = 'completed',
}

@Component({
    selector: 'ng-console-root',
    templateUrl: 'app.component.html',
    providers: [TodoServiceInMemory],
    styles: [`
        .m-b {
            margin-bottom: 20px;
        }
    `]
})
export class AppComponent implements OnInit, OnDestroy {
    todos: Todo[] = [];
    status: string = STATUS.Free;
    newTodo: Todo = new Todo();

    constructor(private todoService: TodoServiceInMemory, private router: Router) {
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.status = event.url.slice(1);
            }
        });
        this.todoService.getAllTodos()
            .subscribe(todos => this.todos = todos)
    }

    search(text: string) {
        this.todoService.search(text)
            .subscribe(todos => this.todos = todos)
    }

    addTodo() {
        this.todoService.addTodo(this.newTodo).subscribe(todo => this.todos.push(todo));
        this.newTodo = new Todo();
    }

    toggleTodoComplete(todo: Todo) {
        this.todoService.updateTodo({...todo, complete: !todo.complete})
            .subscribe(t => todo.complete = t.complete);
    }

    removeTodo(todo) {
        this.todoService.deleteTodoById(todo._id)
            .subscribe((dt: Todo) => {
                this.todos = this.todos.filter(t => t._id !== dt._id);
            });
    }

    getTodosCompleted() {
        return this.todos.filter(t => t.complete);
    }

    removeCompleted() {
        this.todos.filter(t => t.complete).map(t => {
            this.todoService.deleteTodoById(t._id)
                .subscribe((dt: Todo) => {
                    this.todos = this.todos.filter(ft => ft._id !== dt._id);
                });
        });
    }

    stopEditing(todo: Todo, editedTitle: string) {
        todo.title = editedTitle;
        todo.editing = false;
    }

    cancelEditingTodo(todo: Todo) {
        todo.editing = false;
    }

    updateEditingTodo(todo: Todo, editedTitle: string) {
        editedTitle = editedTitle.trim();
        todo.editing = false;

        if (editedTitle.length === 0) {
            return;
        }

        this.todoService.updateTodo({...todo, title: editedTitle})
            .subscribe(t => todo.title = t.title);
    }

    editTodo(todo: Todo) {
        todo.editing = true;
    }

    filterStatus(todo: Todo): boolean {
        if (this.status === STATUS.Active) {
            return !todo.complete;
        } else if (this.status === STATUS.Completed) {
            return todo.complete;
        } else {
            return true;
        }
    }

    ngOnDestroy() {
        // Unsubscibe
    }
}
