const Item = {

    list:() => {
      return [
        { id: 1, name: 'Kecap',    sale_start_at: new Date('2018-10-01'), sale_end_at: new Date('2018-10-10') },
        { id: 2, name: 'Sambal',   sale_start_at: new Date('2018-10-15'), sale_end_at: new Date('2018-10-30') },
        { id: 3, name: 'Merica',   sale_start_at: new Date('2018-08-01'), sale_end_at: new Date('2018-08-31') },
        { id: 4, name: 'Detergen', sale_start_at: new Date('2019-02-10'), sale_end_at: new Date('2019-10-10') },
        { id: 5, name: 'Sapu',     sale_start_at: new Date('2017-09-01'), sale_end_at: new Date('2030-07-15') },
      ]
    },
    
    findById:function(id){
        this.OnSale=Item.list().filter(item => item.id == id)[0]
        // console.log("a")
      return this
    },
    
    isOnSale: function() {
        if(new Date().getTime() >= this.OnSale.sale_start_at.getTime() && new Date().getTime() <= this.OnSale.sale_end_at.getTime()){
            return true
        }else{
            return false
        }
     },
    
  }
module.exports = Item
//   console.log(Item.findById(5).isOnSale())