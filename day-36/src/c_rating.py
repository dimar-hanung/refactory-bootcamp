
def rating(age):
    if type(age) == str:
        return False
    else:
        if age >= 500:
            raise ValueError
        if age >= 21:
            return ('DEWASA')
        elif age >= 13:
            return ('REMAJA')
        elif age >= 9:
            return ('BIMBINGAN ORANG TUA')
        elif age < 9:
            return ('SEMUA USIA')
    

