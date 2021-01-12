describe("Airport", () => {
  var airport;

  beforeEach(function(){
    airport = new Airport();
    airbus = new Plane;
    boeing = new Plane;
    airport.land(airbus);
  });

  it('it is an instance of airport', () => {
    expect(airport).toBeInstanceOf(Airport);
  });


  describe('#land', () => {

    it('should land a plane at the airport and put in hangar', () => {
      expect(airport.isInHangar(airbus)).toEqual(true);
    });

    it('when a plane has been landed the plane state changes to landed', () => {
      expect(airbus.isLanded).toEqual(true);
    });

    it('should not land the plane in the hangar if full and throw and error', () => {
      expect(function () {
        airport.land(boeing) 
      }).toThrow(new TypeError('The airport is full. Go away!'));
      expect(airport.isInHangar(boeing)).toEqual(false);
    });

  });


  describe('#isInHangar', () => {

    it('should return true is plane is in hangar', () => {
      expect(airport.isInHangar(airbus)).toEqual(true);
    });

    it('should return false if plane is not in hangar', () => {
      expect(airport.isInHangar(boeing)).toEqual(false);
    });
  });


});
