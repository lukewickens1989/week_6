function Fizzbuzz(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return "Fizzbuzz"
  } else if (number % 3 == 0) {
    return "Fizz"
  } else if (number % 5 == 0) {
    return "Buzz"
  } else {
    return number
  }
}

Fizzbuzz(3)
Fizzbuzz(5)
Fizzbuzz(15)
Fizzbuzz(4)