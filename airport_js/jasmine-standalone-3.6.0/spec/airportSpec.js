describe("Airport", function(){
  var airport;

  beforeEach(function(){
    airport = new Airport();
  });

  it('it is an instance of airport', function(){
    expect(airport).toBeInstanceOf(Airport);
  });
});
