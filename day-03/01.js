// Done....

const crypto = require("crypto");

class Hash {
  // link stackoferflow : https://stackoverflow.com/questions/6984139/how-can-i-get-the-sha1-hash-of-a-string-in-node-js
  // Ini harus pake Node Js

  static md5(text) {
    
    const md5 = crypto.createHash("md5");
    md5.update(text);
    console.log(md5.digest('hex'));
  }

  static sha1(text) {
    const sha1 = crypto.createHash("sha1");
    sha1.update(text);
    console.log(sha1.digest('hex'));
  }

  static sha256(text){
    const sha256 = crypto.createHash("sha256");
    sha256.update(text);
    console.log(sha256.digest('hex'));
  }

  static sha512(text){
    const sha512 = crypto.createHash("sha512");
    sha512.update(text);
    console.log(sha512.digest('hex'));
  }
} 

Hash.md5('secret') // 5ebe2294ecd0e0f08eab7690d2a6ee69

Hash.sha1('secret') // e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4

Hash.sha256('secret') // 2bb80d537b1da3e38bd30361aa855686bde0eacd7162fef6a25fe97bf527a25b

Hash.sha512('secret') // bd2b1aaf7ef4f09be9f52ce2d8d599674d81aa9d6a4421696dc4d93dd0619d682ce56b4d64a9ef097761ced99e0f67265b5f76085e5b0ee7ca4696b2ad6fe2b2