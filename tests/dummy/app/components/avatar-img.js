import Ember from "ember";
import toBase64 from "ember-cli-base64-converter/computed/img-to-64";

export default Ember.Component.extend({
  url: null,
  base64: toBase64('url')
});