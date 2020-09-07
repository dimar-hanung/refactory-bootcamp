  
def isLeap(year):
    if type(year) != int:
        return False
    # Return true jika tahun merupakan perkalian dari
    # 4 dan bukan perkalian dari 100. 
    # atau tahun perkalian dari 400. 
    if (((year % 4 == 0) and (year % 100 != 0)) or (year % 400 == 0)):
        return "Kabisat"
    else:
        return "Bukan kabisat"