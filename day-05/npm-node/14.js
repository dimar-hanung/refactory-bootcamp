const isIsogram = (text) => new Set(text.toLowerCase()).size === text.length;
module.exports = isIsogram