// console.log("hello world");

function recursive(number) {
  console.log(number)

  if (number === 0) {
    return
  } else {
    recursive(number - 1)
  }
}

recursive(20)