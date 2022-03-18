class RomanConverter {
  constructor(numberToConvert) {
    this.value = numberToConvert;
    this.roman = "";
  }
  processNumeral(romanNum, romanValue) {
    while (this.value >= romanValue) {
      this.roman += romanNum;
      this.value -= romanValue;
    }
  }
}

function convertToRoman(num) {
  const romanNumber = new RomanConverter(num);
  romanNumber.processNumeral("M", 1000);
  romanNumber.processNumeral("CM", 900);
  romanNumber.processNumeral("D", 500);
  romanNumber.processNumeral("CD", 400);
  romanNumber.processNumeral("C", 100);
  romanNumber.processNumeral("XC", 90);
  romanNumber.processNumeral("L", 50);
  romanNumber.processNumeral("XL", 40);
  romanNumber.processNumeral("X", 10);
  romanNumber.processNumeral("IX", 9);
  romanNumber.processNumeral("V", 5);
  romanNumber.processNumeral("IV", 4);
  romanNumber.processNumeral("I", 1);
  return romanNumber.roman;
}
