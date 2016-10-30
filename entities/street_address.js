exports.StreetAddress = function(obj){
  this.addressName = obj ? obj.addressName : '';
  this.streetAddress = obj ? obj.streetAddress : '';
  this.streetAddress2 = obj ? obj.streetAddress2 : '';
  this.house = obj ? obj.house : '';
  this.sector = obj ? obj.sector : '';
  this.city = obj ? obj.city : '';
  this.state = obj ? obj.state : '';
  this.zipCode = obj ? obj.zipCode : '';
  this.note = obj ? obj.note : '';
};
