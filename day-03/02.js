// aduh ini susah juga
// aku lanjut nanti jam 8, ada urusan wkwk
// aku lanjut nanti mas, kalo mau liat liat dulu gpp
// ngomong ke aku kah? atau ada orang lain lagi wkwkwk takut ke geeran
// itu satunya mba Fira
// okayyy

// const message = Cipher.encrypt('Ini tulisan rahasia', 'p4$$w0rd')

// console.log(message) // Anyone without password can't read this message

// const decryptedMessage = Cipher.decrypt(message, 'p4$$w0rd')

// console.log(decryptedMessage) // Ini tulisan rahasia

// referensi https://codeforgeek.com/encrypt-and-decrypt-data-in-node-js/
const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

class Cipher {
  constructor(username, password, name) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.status = false;
  }

  login() {
    if (this.username == "Admin" && this.password == "123") {
      console.log("Login Sukses: ", this.name);
      this.status = true
    } else {
      console.log("Login gagal");
      //   return false
    }
  }

  encrypt(text) {
    let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
  }

  
  decrypt(text) {
    if (this.status === true) {
      let iv = Buffer.from(text.iv, "hex");
      let encryptedText = Buffer.from(text.encryptedData, "hex");
      let decipher = crypto.createDecipheriv(
        "aes-256-cbc",
        Buffer.from(key),
        iv
      );
      let decrypted = decipher.update(encryptedText);
      decrypted = Buffer.concat([decrypted, decipher.final()]);
      console.log(decrypted.toString());
    } else {
      console.log("Masukin username Paswrd yang bener dulu lahh");
    }
  }
}

// var hw = Cipher.encrypt("Ini tulisan rahasia");
// console.log(hw);
// console.log(Cipher.decrypt(hw));
let data = "Ini adalah pesan super rahasia";
let admin = new Cipher("Admin", "123", "Dimar");

admin.login()
data = admin.encrypt(data);
console.log(data)
admin.decrypt(data);

// conso
