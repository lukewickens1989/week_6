class FizzBuzz {

  play(number) {
    if(number % 3 === 0 && number % 5 === 0) {
      return "fizzbuzz"
    } else if(number % 3 === 0) {
      return "fizz"
    } else if(number % 5 === 0) {
      return "buzz"
    } else {
      return number
    };
  };
};


let fizzbuzz = new FizzBuzz();

for(let i = 0; i < 100; i++){
  console.log(fizzbuzz.play(i))
};