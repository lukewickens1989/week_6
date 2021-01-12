describe("FizzBuzz", function(){

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("mutliple of three and five", function () {
    it("returns FizzBuzz if the number is divisible by three and five", function(){
      expect(fizzBuzz.play(15)).toBe("FizzBuzz")
    })
  });

  describe("mutliple of three", function () {
    it("returns Fizz if the number is divisible by three", function(){
      expect(fizzBuzz.play(6)).toBe("Fizz")
    })
  });

  describe("mutliple of five", function () {
    it("returns Buzz if the number is divisible by five", function(){
      expect(fizzBuzz.play(10)).toBe("Buzz")
    })
  });

  describe("not a mutliple of three or five", function () {
    it("returns number if the number is not divisible by three or five", function(){
      expect(fizzBuzz.play(4)).toEqual(4)
    })
  });
  
});
