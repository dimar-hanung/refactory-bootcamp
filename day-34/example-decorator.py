def hello_decorator(func): 
    def inner1(*args, **kwargs): 
          
        print("before Execution") 
        print(*args)
        # getting the returned value 
        returned = func(*args, **kwargs) 
        print("after Execution") 
          
        # returning the value to the original frame 
        return returned
          
    return inner1 
  
  
# adding decorator to the function 
@hello_decorator
def sum_two_numbers(a, b): 
    print("Inside the function") 
    return a + b 
  
a, b = 1, 2
  
# getting the value through return of the function 
print("Sum =", sum_two_numbers(a, b)) 