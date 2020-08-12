const urlUser = "http://jsonplaceholder.typicode.com/users";
const doFetch = (url) =>
  fetch(url)
    .then((result) => result.json())
    .catch((error) => {
      return new Error("messga error");
    });

// Promise.all(promises).then((results) => console.log(results));
new Promise((resolve, reject) => {
  const doing = doFetch(urlUser);
  resolve(doing);
})
  .then((response) => console.log("res", response))
  .catch((erro) => {
    console.log("promise error", erro);
  });