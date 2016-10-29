exports.SchemaLocation = {
  type: {
    type : String,
    optional: true,
    autoValue : function() {
      var coords = this.siblingField('coordinates');
      if (!this.isSet && coords.isSet) {
        return "Point";
      }
    },
    autoform: {
      omit: true,
    }
  },
  // [longitude, latitude]
  coordinates: {
    type : [Number],
    optional: true,
    decimal : true,
    autoform : {
      type : 'map',
      afFieldInput : {
        // mapType : 'terrain',
        zoom : 16,
        // geolocation : true,
        searchBox : true,
        autolocate : true
      }
    }
  }
}
