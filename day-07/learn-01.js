const fs = require("fs");

const readDir = path => {
                
  return new Promise((resolve, reject) =>
    fs.readdir(path, (err, result) => {
      if (err) {
        reject(err);
      }else{
        resolve({ list: result,current:process.argv[1],length : result.length});
      }
      
    })
  );
};




//// Note for Me
// 1.)  /    = root directory
// 2.) ./    = current directory
// 3.) ../   = mundur satu dari current directory
// 3.) ./[nama-folder] = Masuk ke foldr tujuan

//// contoh menggunakan variabel
// const searchDir = async (path) => {
//   const result = await readDir(path)
//     .then((res) => res)
//     .catch((err) => err);
//   console.log(result);
// };
// searchDir("./");

readDir("./")
  .then(res => console.log(res))
  .catch(err => console.log(err));
