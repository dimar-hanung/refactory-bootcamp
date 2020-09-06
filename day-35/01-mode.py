def Mode(value):
    # max adalah nilai tertinggi saat ini
    max = 0
    # i disini bukan index melainkan item dari list value
    for i in value: 
        freq = value.count(i) # count digunakan untuk menghitung banyak nya value yang sama dalam sebuah list
        
        # jika freq lebih dari max, maka assign maks jadi freq saat ini
        # dan assign res jadi item saat ini
        if freq > max: 
            max = freq 
            res = i 
    return res

numbers = [1,2,3,4,5,6,6,8,8,6,9]
grades = [87.5, 88.5, 60.5, 90.5, 88.5]

mostNumbers = Mode(numbers)
print(mostNumbers)

mostGrades = Mode(grades)
print(mostGrades)