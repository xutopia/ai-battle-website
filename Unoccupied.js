var Unoccupied = function(distanceFromTop, distanceFromLeft) {
  this.type = "Unoccupied";
  this.class = "Unoccupied";
  this.distanceFromTop = distanceFromTop;
  this.distanceFromLeft = distanceFromLeft;
};

Unoccupied.prototype.getCode = function() {
  return '   ';
};

module.exports = Unoccupied;