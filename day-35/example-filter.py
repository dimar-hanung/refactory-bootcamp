# function that filters vowels 
def fun(variable): 
    letters = ['a', 'e', 'i', 'o', 'u'] 
    print(variable)
    if (variable in letters): 
        return True
    else: 
        return False
  
  
# sequence 
sequence = ['g', 'e', 'e', 'j', 'k', 's', 'p', 'r'] 
  
# using filter function 
filtered = filter(fun, sequence) 
  
print('The filtered letters are:') 
for s in filtered: 
    print(s) 