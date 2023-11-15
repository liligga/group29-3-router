import axios from "axios";


// CRUD
// C - create - создание сущности - POST
//     axios.post("https://jsonplaceholder.typicode.com/posts", {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     })
//     axios.post("https://jsonplaceholder.typicode.com/todos",   {
//         "userId": 1,
//         "title": "delectus aut autem",
//         "completed": false
//     })


// R - read - получение сущности - GET
//     один пост
//     axios.get("https://jsonplaceholder.typicode.com/posts/3")

//     несколько постов
//     axios.get("https://jsonplaceholder.typicode.com/posts?_limit=15")

// U - update - изменение сущности - PUT, PATCH
//     axios.put("https://jsonplaceholder.typicode.com/posts/10", {
//         title: 'lalalallalala',
//         body: 'bar',
//         userId: 2,
//     })

//     axios.put("https://jsonplaceholder.typicode.com/todos/1", {
//         "userId": 1,
//         "title": "lalalalal aut autem",
//         "completed": false
//       })

// D - delete - удаление сущности - DELETE
//     axios.delete("https://jsonplaceholder.typicode.com/posts/10")