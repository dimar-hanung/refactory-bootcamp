const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value);
const mode = (dataset, duplicate) => 
{ const obj = [
    dataset.reduce(function(prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
      }, {})
][0]
return  `${Object.keys(obj).filter(key => obj[key] === duplicate).join(', ')}, each appeared ${duplicate} times`

}

const stats = dataset =>{
    let counts = {}
    return {
        mean:parseFloat((dataset.reduce((acc, data) => acc + data) / dataset.length).toFixed(12)) ,
        median:function(){dataset.slice().sort((a, b) => a - b);
          const mid = dataset.length / 2;
          return mid % 1 ? dataset[mid - 0.5] : (dataset[mid - 1] + dataset[mid]) / 2;
        }(),
        range: dataset.sort((a, b) => a - b)[dataset.length - 1] - dataset.sort((a, b) => a - b)[0],
        mode: mode(dataset,2),
        largest: dataset.sort((a, b) => a - b)[dataset.length - 1],
        smallest: dataset.sort((a, b) => a - b)[0],
        sum: dataset.reduce((acc, data) => acc + data),
        count: dataset.length,

        
    }


}
module.exports = stats