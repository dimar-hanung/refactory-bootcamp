data = [
  {
    "id": 1,
    "name": "Dimar Hanung",
    "username": "refactory",
    "pass": "123",
    "admin": True,
  },
  {
    "id": 2,
    "name": "Hanung Dua",
    "username": "hanung",
    "pass": "321",
    "admin": False,
  },
]

class Auth:
    def __init__(self, data):
        self.data = data
        self.currentLogin = False
        self.lastLogin = False
    # @staticmethod
    def login(self,username,password):
        for i, val in enumerate(self.data):
            if val["username"] == username and val["pass"] == password:
                self.lastLogin = val
                self.currentLogin = val
                print("login sukses",self.currentLogin)
                return
        print("Password atau Username salah...")
    def validate(self,username,password):
        for i, val in enumerate(self.data):
            if val["username"] == username and val["pass"] == password:
                print(val,"Tesedia")
                return
        print("Tidak ada kecocokan")
    def logout(self):
        if not self.currentLogin:
            print("Tidak ada user login saat ini !")
        else:
            print(f"{self.currentLogin['name']} Berhasil Logout")
            self.currentLogin = False
    def user(self):
        print(self.currentLogin)
    def id(self):
        if not self.currentLogin:
            print("Tidak ada user login saat ini !")
        else:
            print(self.currentLogin['id'])
    def check(self):
        if self.currentLogin:
            return True
        else:
            return False
    def guest(self):
        if not self.currentLogin:
            return True
        else:
            return False
    def last_login(self):
        print(self.lastLogin)

refactory = Auth(data)
refactory.login("refactory","123")
Auth(data).validate("refactory","123")
refactory.user()
refactory.logout()
refactory.id()
print(refactory.check())
print(refactory.guest())
refactory.last_login()