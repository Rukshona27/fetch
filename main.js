
//№1
// fetch('https://jsonplaceholder.typicode.com/comments')
//   .then((response) => response.json())
//   .then((json) => json.filter((json)=>{
//     console.log(json.name + '<br>' + json.email)
//   }));

//№2
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response) => response.json())
// .then((json) => json.filter((json)=>{
//     console.log(json.title + '<br>' + json.body)
// }))

//№3
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then((response) => response.json())
// .then((json) => json.filter((json)=>{
//     console.log(json.postId + '<br>' + json.body)
// }))

//№4
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     id: 1,
//     title: 'some title',
//     body: 'some text',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//№5
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'some title 2',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//№6
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',})

//№7
// fetch('https://jsonplaceholder.typicode.com/albums')
//     .then((response) => response.json())
//     .then((json) => json.filter(()=>{
//         console.log(json.title)
//     }))

//№8
// fetch('https://jsonplaceholder.typicode.com/photos')
// .then((response)=> response.json())
// .then((json)=> json.filter((json)=>{
//     console.log( json.title + '<br>' + json.url)
// }))
