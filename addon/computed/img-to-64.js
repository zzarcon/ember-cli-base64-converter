import Ember from "ember";

export default function(dependentKey) {
  return Ember.computed(dependentKey, function(propertyName) {
    var imageUrl = this.get(dependentKey);
    var promise = this.get('base64converter').convert(imageUrl);

    if (promise.then && !promise.get('isFulfilled')) {
      promise.then(function() {
        this.notifyPropertyChange(propertyName);
      }.bind(this));

      return '';  
    }
    
    return promise;
  });
};