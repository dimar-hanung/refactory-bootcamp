data = []
class Cart():
    def __init__(self, data=[]):
        self.data = data
    def showAll(self):
        print (self.data)
        return self
    def addItem(self,value):
        self.data.append(value)
        return self
    def removeItem(self,value):
        for i, val in enumerate(self.data):
            if val['item_id'] == value['item_id']: # konsep nya sama seperti forEach Javascript
                del self.data[i]
        return self
    def addDiscount(self,value):
        value = int(value.split('%')[0])
        for i, val in enumerate(self.data):
            self.data[i]['price'] = self.data[i]['price'] - (self.data[i]['price'] * value / 100)
        return self
    @property
    def totalItems(self):
        print("Total Item:", len(self.data))
        return self
    @property
    def totalQuantity(self):
        total = sum(item['quantity'] for item in self.data)
        print("Total Seluruh Barang:",total)
        return self

    # Alasan tidak menggunakan sum disini supaya tidak terjadi 2 kali loop
    @property
    def totalPrice(self):
        total = 0
        for i in range(len(self.data)):
            total += self.data[i]['price'] * self.data[i]['quantity']
        print("Total Harga:",total)
        return self
    def checkout(self,filename,ext):
        import json
        f = open(f"{filename}.{ext}", "w")
        f.write(json.dumps(self.data))
        f.close()

cart = Cart(data)
(
cart.addItem({ 'item_id': 1, 'price': 30000, 'quantity': 3 })
    .addItem({ 'item_id': 2, 'price': 10000 })              
    .addItem({ 'item_id': 3, 'price': 5000, 'quantity': 2 })
    .removeItem({'item_id': 2})
    .addItem({ 'item_id': 4, 'price': 400, 'quantity': 6 })
    .addDiscount("50%")
    .showAll()
    .totalItems
    .totalQuantity
    .totalPrice
    .checkout("cart","txt")
)

