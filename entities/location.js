exports.Location = function(longitude, latitude){
  this.type = 'Point'; // Default MongoDB value. Should it be here??
  // [longitude, latitude]
  this.coordinates = [longitude, latitude];
  // Parse string value for location data
  this.setFromText = function(txt){
    this.coordinates = txt.split(',').map(function(v){
      return parseFloat(v.trim());
    });
    return this.coordinates;
  };
};
