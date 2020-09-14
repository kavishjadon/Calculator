export default function (str = "") {
  let value = false;
  const operations = {
    "%": "/100",
    "÷": "/",
    "×": "*",
    "−": "-",
    "+": "+",
  };

  // convert the string for eval()
  for (let i = 0; i < str.length; i++) {
    if (operations[str[i]]) {
      str = str.substring(0, i) + operations[str[i]] + str.substring(i + 1);
      if (i !== 0) value = true;
    }
  }

  if (value) {
    try {
      let result = eval(str);
      if (result) return "" + result;
    } catch (err) {}
  }

  return "";
}
