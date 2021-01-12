
describe('Plane',function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it('Instance of a plane class', () => {
    expect(plane).toBeInstanceOf(Plane);
  });

  describe('#land', () => {
    it('can land at an airport', () => {
      expect(plane.land).not.toBeUndefined();
    });

    it('Check if plane is landed', () => {
      plane.takeoff()
      plane.land()
      expect(plane.isLanded).toEqual(true);
    });
  });

  describe('#takeoff', () => {
    it('can take off from an airport', () => {
      expect(plane.takeoff).not.toBeUndefined();
    });

    it('Check if plane is not landed', () => {
      plane.takeoff()
      expect(plane.isLanded).toEqual(false);
    });
  });

});
