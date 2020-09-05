def Mode(value):
    max = 0
    res = value[0] 
    for i in value: 
        freq = value.count(i) 
        if freq > max: 
            max = freq 
            res = i 
      
# ngeprint result 
numbers = [1,2,3,4,5,6,6,8,8,6,9]
grades = [87.5, 88.5, 60.5, 90.5, 88.5]

mostNumbers = Mode(numbers)

mostGrades = Mode(grades)