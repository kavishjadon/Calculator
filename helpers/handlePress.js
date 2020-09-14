import getResult from "./getResult";

export default function (inp, data, setData) {
  const operations = ["%", "÷", "×", "−", "+"];
  const currNumber = getCurrNumber(data.calString);
  const calStrLen = data.calString.length;
  const lastChar = data.calString[calStrLen - 1];
  const secLastChar = data.calString[calStrLen - 2];
  const isOp = (el) => (operations.indexOf(el) < 0 ? false : true);

  // implement comma functionality and several zeros,ex- 9 + 0000000
  switch (true) {
    case inp === ".": // dot btn is pressed
      if (!currNumber) data.calString += "0" + inp;
      else if (!currNumber.includes(".")) data.calString += inp;
      break;

    case inp === "−":
      if (lastChar !== "+" && lastChar !== "−") data.calString += inp;
      else if (lastChar == "+")
        data.calString = data.calString.slice(0, -1) + inp;
      break;

    case isOp(inp): //  a btn from operations is pressed
      if (lastChar === ".") data.calString = data.calString.slice(0, -1);
      if (calStrLen === 1 && lastChar === "−") break;
      if (calStrLen > 0 && inp !== lastChar) {
        if (isOp(lastChar) && lastChar !== "%") {
          if (
            !(isOp(secLastChar) && secLastChar !== "%" && lastChar === "−") &&
            !(inp === "%" && secLastChar === "%")
          )
            data.calString = data.calString.slice(0, -1) + inp;
        } else data.calString += inp;
      }
      break;

    case inp === "=":
      if (data.result) {
        data.calString = data.result;
        data.result = "";
      }
      break;

    case inp == "AC": // clear button is pressed
      data.calString = "";
      data.result = "";
      break;

    case inp == "➝": // remove digit button is pressed
      data.calString = data.calString.slice(0, -1);
      break;

    case inp == "0" || inp == "00":
      if (!currNumber) data.calString += "0";
      else if (currNumber !== "0") data.calString += inp;
      break;

    default:
      if (lastChar === "%") data.calString += "×";
      if (currNumber.length < 11) data.calString += inp;
      break;
  }

  data.result = getResult(data.calString);
  setData(data);
}

function getCurrNumber(str) {
  // find current Number
  const operations = {
    "%": "/100",
    "÷": "/",
    "×": "*",
    "−": "-",
    "+": "+",
  };
  for (let i = str.length - 1; i >= 0; i--) {
    if (operations[str[i]]) return str.slice(i + 1);
  }
  return str;
}
