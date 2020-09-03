# from calc import square
# import calc
# import calc.cube as cube
# import sys
# import datetime
# import time
# sys.path.append('./calc')
# print(cube.square(2))
# print(help("modules"))
# time.sleep(5)
# print(datetime.date.today())
# data = {}

data = [
    {
        "fullname" : "ratna putri",
        "address" : "jakarta",
        "salary" : 5000000,
        "phone" : '099903'
    },
    {
        "fullname" : "hamish daud",
        "address" : "jakarta",
        "salary" : 2000000,
        "phone" : '34232949'
    },
]


class A:
    @staticmethod
    def create(id,data):
        print(type(data), id)

a = A()
a.create(2, {"fullname":"ratna putri", "address":"jakarta", "salary":5000000, "phone":"099903"})

class Employee:
    # class attribute / property
    fullname = "Rani Rani"
    id = 0000

    def __init__(self, username, address, phone):
        self.__username = username
        self.__address = address
        self.phone = phone
        # Employee.emp_id = emp_id

    # getter
    def get_username(self):
        return self.__username

    # setter
    def set_username(self, new_username):
        self.__username = new_username
        return self.__username
    
    @property
    def show_info(self):
        return f"username : {self.__username}"

    @property
    def address(self):
        return self.__address

    @address.setter
    def address(self, new_address):
        self.__address = new_address
        return self.__address
    
    @address.deleter
    def address(self, new_address):
        del self.__address

    def test_object(self) :
        Employee.profile()
        Employee.test_class()
        print("test object")

    def profile(self):
        return f"username : {self.__username} address : {self.__address}"

    # @staticmethod
    # def profile():
    #     # print(f"{self.username}")
    #     print("profile method")

    @classmethod
    def test_class(cls):
        print("test class method",cls.fullname)
    

class Manager(Employee):
    dept = "Finance"
    def __init__(self, emp_id, username, address, phone, dept) :
        super().__init__(username, address, phone)
        self.emp_id = emp_id
        self.dept = dept

    def profile_manager(self) :
        return super().profile()
    
    # override
    def profile(self) :
        return f"address : {self.address} department : {self.dept} phone : {self.phone}"

class MyList(list) :

    # override
    def append(self, obj):
        return obj

numbers = MyList()
print(numbers.append("numbers append"))
# print(numbers.pop())

# budi = Manager("012f", "budibudi", "jakarta", "203924", "Finance")
# print(budi.emp_id)
# print(budi.phone)
# print(budi.address)
# print(budi.profile_manager())
# print(budi.profile())

# rani = Employee("raniranirani","jakarta")

# print(rani.get_username())
# print(rani.set_username("new Rani"))

# print(rani.show_info)

# print(rani.address)
# print(rani.address)
# rani.address = "setter property Rani"
# print(rani.__dict__)
# print(rani.address)
# del rani.address
# print(rani.__dict__)
# print(rani.address)


# andi = Employee("raniranirani","jakarta")
# rani.profile()
# Employee.profile()
# rani.test_class()

# Employee.test_object()
# print(rani.address)
# print(Employee.__dict__)
# print(rani.__dict__)
# print(rani.fullname)
# print(rani.id)
# rani.fullname = "Ganti nama Rani"
# rani.id = "ganti123"
# print(rani.fullname)
# print(rani.id)