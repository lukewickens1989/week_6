describe("FizzBuzz", () => {
  let fizzbuzz;
  beforeEach(()=> {
    fizzbuzz = new FizzBuzz();
  });

  it("can create new instances of itself", () => {
    expect(fizzbuzz).toBeInstanceOf(FizzBuzz);
  });


  describe("#play", () => {
    it("returns fizz with an argument divisible by 3", () => {
      expect(fizzbuzz.play(3)).toEqual("fizz");
      expect(fizzbuzz.play(9)).toEqual("fizz");
      expect(fizzbuzz.play(18)).toEqual("fizz");
    });
    it("returns buzz with an argument divisible by 5", () => {
      expect(fizzbuzz.play(5)).toEqual("buzz");
      expect(fizzbuzz.play(10)).toEqual("buzz");
      expect(fizzbuzz.play(20)).toEqual("buzz");
    });
    it("returns fizzbuzz with an argument divisible by 3 and 5", () => {
      expect(fizzbuzz.play(15)).toEqual("fizzbuzz");
      expect(fizzbuzz.play(30)).toEqual("fizzbuzz");
      expect(fizzbuzz.play(60)).toEqual("fizzbuzz");
    });
    it("returns the number with an argument not divisible by 3 or 5", () => {
      expect(fizzbuzz.play(1)).toEqual(1);
      expect(fizzbuzz.play(2)).toEqual(2);
      expect(fizzbuzz.play(8)).toEqual(8);
    });
  });

});