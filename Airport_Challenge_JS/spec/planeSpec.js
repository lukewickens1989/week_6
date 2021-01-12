
describe('Plane',function(){
  var plane;
  beforeEach(function(){
    plane = new Plane();
  });

  it('Instance of a plane class', function(){
    expect(plane).toBeInstanceOf(Plane)
  });

  it('can land at an airport', function(){
    expect(plane.land).not.toBeUndefined()
  });

  it('Check if plane is landed', function(){
    plane.takeoff()
    plane.land()
    expect(plane.plane_status).toEqual(true)
  });

  it('Check if plane is landed', function(){
    plane.takeoff()
    expect(plane.plane_status).toEqual(false)
  });
});
