# How to run in local machine

![demo](https://res.cloudinary.com/silverbirder/image/upload/v1585571668/todo_mvc/todomvc_by_nestjs_640_480.gif)

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
