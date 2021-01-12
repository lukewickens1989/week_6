class FizzBuzz {

  play(number) {
    if (number % 3 == 0 && number % 5 == 0) {
      return "FizzBuzz"
    } else if (number % 3 == 0){
      return "Fizz"
    } else if (number % 5 == 0){
      return "Buzz"
    } else {
      return number
    }
  }
}

let new_fizz = new FizzBuzz();

for (let i = 1; i <= 100; i++) {
  console.log(new_fizz.play(i));
}
