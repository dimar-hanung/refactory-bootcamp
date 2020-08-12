const symmetrical = value => value.toString() === value.toString().split("").reverse().join("") ? true : false
module.exports = symmetrical