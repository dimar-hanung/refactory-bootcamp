from num2words import num2words

def Convert(value):
    return num2words(value, lang='id')

satu = Convert(1)
belasan = Convert(12)
puluhan = Convert(30)
print(satu)
print(belasan)
print(puluhan)