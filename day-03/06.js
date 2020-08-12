class Auth {
  constructor(username, password, data) {
    this.data = data;
    this.username = username;
    this.password = password;
    this.status = false;
    this.current = "Tidak Ada Data";
    this.date = new Date().toLocaleString();
  }

  login(username,password) {
    for (let a in data) {
      if (this.username == data[a].username && this.password == data[a].pass || username == data[a].username && password == data[a].pass) {
        console.log(`Selamat datang ${data[a].name}`);
        this.status = true;
        this.username = data[a].username
        this.password = data[a].pass
        this.current = data[a];
        return true;
      }
    }
    console.log("gagal login");
  }
  validate(username,password) {
    for (let a in data) {
      if (username == data[a].username && password == data[a].pass) {
        console.log(`Data ditemukan :}`,data[a]);
        return true;
      }
    }
    console.log("data tidak ada");
  }
  logout() {
    this.username = ""; 
    this.password = ""; 
    this.status = false;
    this.current = "Tidak ada data"; 
    console.log("Anda Telah Logout");
    this.date = new Date().toLocaleString();
  }
  user() {
    console.log(this.current);
  }

  id(id) {
    data.forEach((data) => {
      if (data.id == id) console.log(data);
    });
  }
  
  check() {
    let status =
      this.status === true ? "Akun Sedang Login" : "Akun Sedang Logout";
    console.log(status);
    return true;
  }
  guest() {
    
    console.log(this.status === true ? true : false);
    return false;
  }
  lastLogin() {
    
    
    console.log(this.status === true ? new Date().toLocaleString() : this.date);
  }
}

let data = [
  {
    id: 1,
    name: "Dimar Hanung",
    username: "Dimar",
    pass: "123",
    admin: true,
  },
  {
    id: 2,
    name: "Hanung Dua",
    username: "hanung",
    pass: "321",
    admin: false,
  },
];
let refactory = new Auth("Dimar", "123", data);
refactory.login();
refactory.logout(); // kalo ini dimatiin bisa
refactory.validate("hanung","321")
refactory.check();
refactory.user(); //
refactory.lastLogin();
refactory.login("hanung","321")
// refactory.id(2);
// iya
