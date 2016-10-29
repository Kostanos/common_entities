exports.StreetAddressHelper = function(){
  function getSeparator(text){
     return text && (text.length > 0) ? ', ' : '';
  };
  function getAppendText(originalText, textToAppend){
    if(originalText.indexOf(textToAppend) === -1) {
      return textToAppend ? getSeparator(originalText) + textToAppend : '';
    };
    return '';
  }
  // Create short address from address object
  this.getShortAddress = function(address){
    if (!address) return '';
    var shortAddress = '';
    shortAddress += getAppendText(shortAddress, address.sector);
    shortAddress += getAppendText(shortAddress, address.streetAddress);
    shortAddress += getAppendText(shortAddress, address.house);
    shortAddress += getAppendText(shortAddress, address.city);
    shortAddress += getAppendText(shortAddress, address.state);
    return shortAddress;
  };
};
