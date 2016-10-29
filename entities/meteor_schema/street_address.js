// Meteor MongoDB Schema
exports.SchemaStreetAddress = {
  addressName:{
    type:String,
    optional:true,
  },
  streetAddress: {
    type: String,
    max: 100,
    optional: true
  },
  streetAddress2: {
    type: String,
    max: 100,
    optional: true
  },
  house: {
    type: String,
    max: 50,
    optional: true
  },
  sector: {
    type: String,
    max: 50,
    optional: true
  },
  city: {
    type: String,
    max: 50,
    optional: true
  },
  state: {
    type: String,
    optional: true
  },
  zipCode: {
    type: String,
    optional: true
  },
  note: {
    type: String,
    optional: true,
    max: 1000,
    autoform: {
      rows: 5
    },
  },
};
