import Ember from "ember";
import DS from "ember-data";

export default Ember.Service.extend({
  cache: {},

  /**
   * TODO: Add description
   * @param  {[type]} imageUrl     [description]
   * @param  {[type]} outputFormat [description]
   * @return {[type]}              [description]
   */
  convert(imageUrl, outputFormat) {
    var cache = this.get('cache');
    var cacheValue = cache[imageUrl];

    if (cacheValue) {return cacheValue;}

    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
      var img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');
      img.src = imageUrl;

      img.onload = function() {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');

        canvas.height = this.height;
        canvas.width = this.width;

        ctx.drawImage(this, 0, 0);

        var dataURL = canvas.toDataURL(outputFormat);

        cache[imageUrl] = dataURL;
        canvas = null;

        resolve(dataURL);
      };

      //TODO: handle onerror
      //img.onerror = reject
    });

    return DS.PromiseObject.create({promise: promise});
  }
});