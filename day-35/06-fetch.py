import requests,json
from bs4 import BeautifulSoup

url = 'https://indeks.kompas.com/headline'
res = requests.get(url)
soup = BeautifulSoup(res.content, 'html.parser')

elems = soup.find_all('a', class_="article__link", href=True)

response = {
    "status":res.status_code,
    "message":"Berhasil mendapatkan data",
    "data": []
}

for elem in elems:
    response['data'].append({'Title': elem.text,'URL': elem['href']})

print(json.dumps(response,indent = 4))

f = open("data.json", "w") # membuat file
f.write(json.dumps(response,indent = 4)) # menulis file \n = ganti baris
f.close() # tutup