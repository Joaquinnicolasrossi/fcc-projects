const regexRegular = /^\d{3}-\d{3}-\d{4}$/;
const regexParenthesis = /^\(\d{3}\) ?\d{3}-\d{4}$/;
const regexHyphenless = /^\d{3} ?\d{3} ?\d{4}$/;
const regexCountryCode = /^1 \d{3} \d{3} \d{4}$/;
const regexIrregular1 = /^1 \d{3}-\d{3}-\d{4}$/;
const regexIrregular2 = /^1 ?\(\d{3}\) ?\d{3}-\d{4}$/;

const REGEXES = [
  regexRegular,
  regexParenthesis,
  regexHyphenless,
  regexCountryCode,
  regexIrregular1,
  regexIrregular2,
];

function telephoneCheck(str) {
  for (let regex of REGEXES) {
    if (regex.test(str)) {
      return true;
    }
  }
  return false;
}

console.log(telephoneCheck("1(555)555-5555"));
