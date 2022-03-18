const reverseStr = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

function palindrome(str) {
  const cleanUpRegex = /[^a-zA-Z0-9]/g;
  let lowRegStr = str.toLowerCase().replace(cleanUpRegex, "");
  let reversedStr = reverseStr(lowRegStr);
  console.log(`"${lowRegStr}" es igual a "${reversedStr}"?`);
  return reversedStr == lowRegStr;
}

console.log(palindrome("Araceli"));
