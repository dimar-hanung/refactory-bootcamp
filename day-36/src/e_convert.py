def num2word(bil):
    if type(bil) == str:
        return False
    angka = ["","Satu","Dua","Tiga","Empat","Lima","Enam",
             "Tujuh","Delapan","Sembilan","Sepuluh","Sebelas"]
    hasil = " "
    n = int(bil)
    if n>= 0 and n <= 11:
        hasil = angka[n]
    elif n <20:
        hasil = num2word (n-10) + " Belas "
    elif n <100:
        hasil = num2word (n/10) + " Puluh " + num2word (n%10)
    elif n <200:
        hasil = " Seratus " + num2word (n-100)
    elif n <1000:
        hasil = num2word (n/100) + " Ratus " + num2word (n%100)
    elif n <2000:
        hasil = " Seribu " + num2word (n-1000)
    else:
        hasil = "Angka Hanya Sampai 1999"

    return hasil.strip()

print(num2word(1234))