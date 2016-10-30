
// @param {Object|number} longitude
// @param {number} latitude
// @param {string} type
exports.Location = function(longitude, latitude, type){
  // accept other object
  if (typeof longitude == 'object'){
    latitude = longitude.coordinates[1];
    type = longitude.type;
    longitude = longitude.coordinates[0];
  };
  this.type = type ? type : 'Point'; // Default MongoDB value. Should it be here??
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
