![demo](https://res.cloudinary.com/silverbirder/image/upload/v1585604556/todo_mvc/todomvc_by_nestjs_3m.gif)
# How to run in local machine
## Only Frontend

```shell script
$ npm install -g @angular/cli
$ npm install
$ ng serve todomvc
```

## Use Database

```shell script
$ npm install -g @angular/cli
$ npm install
$ docker-compose up -d
$ ng serve backend
# edit todomvc/src/app/app.component.ts TodoServiceInMemory => TodoService
$ ng serve todomvc
```
