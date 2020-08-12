const axios = require( 'axios' );
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users
// console.log(axios)
async function getUser(){

    // Code 1 - ( non promise )
    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(res => res.data[0])
    // .catch(err => err.message)
    // return response

    // Code 2 - recomend untuk handle error
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/userxs');
        return response.data
      } catch (error) {
        return error.message
      }
 
}

async function getPost(){

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/poxsts');
        return response.data
      } catch (error) {
        return error.message
      }
 
}


Promise.all([getUser(), getPost()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
    console.log(acct,perm)
  });


// (async () => {
//     await getUserId()
//     .then(res => console.log(res))
//     .catch(e => {
//        console.log('That did not go well.')
//        throw e
//     })
 
//  })().catch( e => { console.error(e) } )

