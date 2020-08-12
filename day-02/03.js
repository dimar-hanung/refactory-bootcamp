const csv =`NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`




const makeObject = (data) => {
    
    let row = csv.split("\n");
    let key = row[0].split(', ');
    let objOutput = []
    
    for(let i = 0;i<row.length;i++){
        let obj = {}
        let col = row[i].split(", ")

        for(let j = 0;j < col.length; j++){

            obj[key[j].toLowerCase()] = col[j]
            
        }

        objOutput.push(obj)
        
    }

    console.log(objOutput);

}

makeObject(csv);