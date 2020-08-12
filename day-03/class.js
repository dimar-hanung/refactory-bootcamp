// kalo mau Login via github biar bisa ikutan nulis wkwk

class User {
    setUsername(username) {
      this.username = username
    }
  
    setName(name) {
      this.name = name
    }
  
    setEmail(email) {
      this.email = email
    }
    
    setPassword(password) {
      this.password = password
    }
  }
  
  // Usage
  const user = new User()
  user.setUsername('mul14')
  user.setName('Mulia')
  user.setEmail('email@example.com')
  user.setPassword('S3cR3T')

  console.log(user)
  