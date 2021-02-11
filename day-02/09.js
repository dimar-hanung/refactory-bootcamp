let data = [
  {
    order_id: "SO-921",
    created_at: "2018-02-17T03:24:12",
    customer: { id: 33, name: "Ari" },
    items: [
      { id: 24, name: "Sapu Lidi", qty: 2, price: 13200 },
      { id: 73, name: "Sprei 160x200 polos", qty: 1, price: 149000 }
    ]
  },
  {
    order_id: "SO-922",
    created_at: "2018-02-20T13:10:32",
    customer: { id: 40, name: "Ririn" },
    items: [
      { id: 83, name: "Rice Cooker", qty: 1, price: 258000 },
      { id: 24, name: "Sapu Lidi", qty: 1, price: 13200 },
      { id: 30, name: "Teflon", qty: 1, price: 190000 }
    ]
  },
  {
    order_id: "SO-923",
    created_at: "2018-02-28T15:20:43",
    customer: { id: 33, name: "Ari" },
    items: [
      { id: 303, name: "Pematik Api", qty: 1, price: 12000 },
      { id: 49, name: "Panci", qty: 2, price: 70000 }
    ]
  },
  {
    order_id: "SO-924",
    created_at: "2018-03-02T14:30:54",
    customer: { id: 40, name: "Ririn" },
    items: [{ id: 986, name: "TV LCD 40 inch", qty: 1, price: 6000000 }]
  },
  {
    order_id: "SO-925",
    created_at: "2018-03-03T14:52:22",
    customer: { id: 33, name: "Ari" },
    items: [
      { id: 1033, name: "Nintendo Switch", qty: 1, price: 4990000 },
      { id: 2003, name: "Macbook Air 11 inch 128 GB", qty: 1, price: 12000000 },
      { id: 23, name: "Pocari Sweat 600ML", qty: 5, price: 7000 }
    ]
  },
  {
    order_id: "SO-926",
    created_at: "2018-03-05T16:23:20",
    customer: { id: 58, name: "Annis" },
    items: [{ id: 24, name: "Sapu Lidi", qty: 3, price: 13200 }]
  }
];

class PurchaseManage {
  constructor(data) {
    this.data = data;
  }

  getByMonth(month = "02") {
    this.data.forEach(data => {
      if (data.created_at.split("-")[1] == month) {
        console.log(data);
      }
    });
  }

  getPriceByPerson(name) {
    let total = 0;
    this.data.forEach(data => {
      if (data.customer.name.toLowerCase() === name.toLowerCase()) {
        data.items.forEach(item => {
          total += parseInt(item.price);
        });
      }
    });
    console.log(total);
  }

  getPriceLowerThan(lower) {
    let name = [];
    this.data.forEach(data => {
      let total = 0;

      data.items.forEach(item => {
        total += parseInt(item.price);
      });
      if (total > lower) name.push(data.customer.name);
    });
    console.log((name = [...new Set(name)]));
  }
}

let purchase = new PurchaseManage(data);
purchase.getByMonth("02");
purchase.getPriceByPerson("Ari");
purchase.getPriceLowerThan(300000);
