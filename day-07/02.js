const axios = require( 'axios' );
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts

const getUser = ()=> axios.get('https://jsonplaceholder.typicode.com/users');
const getPost = ()=> axios.get('https://jsonplaceholder.typicode.com/posts');


Promise.all([getUser(), getPost()])
  .then(results => {
    const users = results[0].data;
    const posts = results[1].data;
    // merge explain :
    // posts di loop => membuat objek user pada posts[i] atau post, 
    // post['user'] berisi data yang match antara user.id === post.userId
    // karena match menggunakan filter yang merupakan method array maka hasil pun berupa array
    // walaupun hanya berisi 1 array, makanya disitu ada index[0], untuk mengambil array ke 0 ( anggap aja utk buang array nya)
    // btw merge ga bisa buat 1 line code, karena yang itu harus menambahkan post.user
    const merge = posts.map(post => {
        post['user'] = users.filter(user => user.id == post.userId)[0]
        return post
    })

    console.log(merge)
  })
  .catch(err => console.log(err.message))
  
