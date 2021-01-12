class Airport {

  MAX_CAPACITY = 1;

  constructor() {
    this.hangar = [];
  };

  land(plane) {
    if (this.hangar.length == this.MAX_CAPACITY) {
      let capacityError = 'The airport is full. Go away!';
      throw new TypeError(capacityError);
    } else {
      return this.hangar.push(plane)
    };
  };

  isInHangar(plane) {
    return this.hangar.includes(plane)
  };

}
