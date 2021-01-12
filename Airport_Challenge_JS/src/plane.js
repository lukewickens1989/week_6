
class Plane {
  constructor(landed = true){
    this.isLanded = landed;
  }
  land(){
    this.isLanded = true
  };

  takeoff(){
    this.isLanded = false
  };
}
