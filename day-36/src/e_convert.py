def num2word(bil):
    if type(bil) == str:
        return False
    angka = ["","Satu","Dua","Tiga","Empat","Lima","Enam",
             "Tujuh","Delapan","Sembilan","Sepuluh","Sebelas"]
    Hasil = " "
    n = int(bil)
    if n>= 0 and n <= 11:
        Hasil = angka[n]
    elif n <20:
        Hasil = num2word (n-10) + " Belas "
    elif n <100:
        Hasil = num2word (n/10) + " Puluh " + num2word (n%10)
    elif n <200:
        Hasil = " Seratus " + num2word (n-100)
    elif n <1000:
        Hasil = num2word (n/100) + " Ratus " + num2word (n%100)
    elif n <2000:
        Hasil = " Seribu " + num2word (n-1000)
    else:
        Hasil = "Angka Hanya Sampai 1999"

    return Hasil.strip()

print(num2word(2000))