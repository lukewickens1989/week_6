
class Plane {
  constructor(landed = true){
    this.plane_status = landed;
  }
  land(){
    this.plane_status = true
  };

  takeoff(){
    this.plane_status = false
  };
}
