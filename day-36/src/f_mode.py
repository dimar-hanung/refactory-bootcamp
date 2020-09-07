def Mode(value):
    # max adalah nilai tertinggi saat ini
    if type(value) != list:
        return False
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