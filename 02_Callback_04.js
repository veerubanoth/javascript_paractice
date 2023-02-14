// Callback Hell solution
step1(10, function (result1, error) {
  if (!error) {
    return result1;
  }
});

function step1(value, callback) {
  let result1 = callback(value + 10, error);
  step2(result1, function (result2, error) {
    if (!error) {
      return result2;
    }
  });
}

function step2(value, callback) {
  let result2 = callback(value + 10, false);
  step3(result2, function (result3, error) {
    if (!error) {
      return result3;
    }
  });
}

function step3(value, callback) {
  let result3 = callback(value + 10, false);
  console.log(result3);
}
