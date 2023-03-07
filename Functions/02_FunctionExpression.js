const convertTemp = function (temp, convertTo) {
  let toUnit = convertTo ?? "F";
  // If the user doen't provide converTo parameter, it will take 'F' as default value.
  let tempToConvert = Number(temp) ?? 0;
  //Incoming value for temp converts to number and if absence or null or undefined of temp value then. it will take 0 as default value.
  if (toUnit === "F") {
    let fahrenheit = (tempToConvert * 9) / 5 + 32;
    return `${fahrenheit}\u{00B0}F`;
  } else {
    let celsius = ((tempToConvert - 32) * 5) / 9;
    return `${celsius}\u{00B0}C`;
  }
};
let toDay = 35;

console.log(convertTemp(toDay, "C"));
