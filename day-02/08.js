class Str {
  constructor(str) {
    this.str = str;
  }
  lower(word) {
    return word.toLowerCase();
  }
  upper(words) {
    return words.toUpperCase();
  }
  capitalize(words) {
    return words.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
      match.toUpperCase()
    );
  }
  reverse(words) {
    return words.split("").reverse().join("");
  }

  contains(words, match) {
    // console.log(match instanceof Array)
    if (match instanceof Array) {
      for (let i in match) {
        if (words.indexOf(match[i]) !== -1) return true;
        else return false
      }
    }else{
        return words.indexOf(match) !== -1 ?  true : false
    }
  }

  random(number = 6) {
    let char = "abcdefghijklmnopqestuvwxyz1234567890".split("");
    let output = "";
    while (output.length < number) {
      let sizeRandom =
        Math.floor(Math.random() * 2) === 1 ? "toUpperCase" : "toLowerCase";
      output += char[Math.floor(Math.random() * char.length)][sizeRandom]();
    }

    return output;
  }

  slug(words, seperator = "-") {
    words = words.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");
    words = words.replace(/  +/g, " ");
    words = words.split(" ").join(seperator);
    return words;
  }
  count(words) {
    return words.length;
  }
  countWords(words) {
    return words.split(" ").length;
  }
  trim(words, count = 100, seperator = "...") {
    if (words.length > count)
      words = words.slice(0, count) + seperator;

    return words;
  }
  trimWords(words, count = 3, seperator = "...") {
    words = words.split(" ");
    if (words.length > count)
      words = words.slice(0, count).join(" ") + seperator;

    return words;
  }
}

const str = new Str();
let text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
let obj = {
  lower: str.lower("Dimar"),
  upper: str.upper("malam"),
  capitalize: str.capitalize("saya ingin makan"),
  reverse: str.reverse("kasur"),
  contains: str.contains("Saya ingin makan sate", ["sate","rujak"]),
  random: str.random(50),
  slug: str.slug(
    "JavaScript, TypeScript & Dart -     Bahasa mana yang akan populer di 2018?"
  ),
  count: str.count("lorem ipsum"),
  countWords: str.countWords("lorem ipsum"),
  trim: str.trim(text),
  trimWords: str.trimWords(text,4),
};
console.log(obj);
