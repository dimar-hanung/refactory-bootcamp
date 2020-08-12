const stats = require("../13")
test("test data set statistic with obj output",()=>{
    expect(stats([10, 2, 38, 23, 38, 23, 21])).toStrictEqual({
        "mean": 22.142857142857,
        "median": 23,
        "range": 36,
        "mode": "23, 38, each appeared 2 times",
        "largest": 38,
        "smallest": 2,
        "sum": 155,
        "count": 7
      })
})