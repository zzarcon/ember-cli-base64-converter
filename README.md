[![Build Status](https://travis-ci.org/zzarcon/ember-cli-base64-converter.svg)](https://travis-ci.org/zzarcon/ember-cli-base64-converter)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-base64-converter.svg)](http://emberobserver.com/addons/ember-cli-base64-converter)
[![npm version](https://badge.fury.io/js/ember-cli-base64-converter.svg)](https://badge.fury.io/js/ember-cli-base64-converter)

# ember-cli-base64-converter

> Convert imageUrl to base64 effortless

Simple ember addon that provides a **Service** + **Ember computed macro** to convert imageUrls to base64 in a Promise way. It uses [DS.PromiseObject](emberjs.com/api/data/classes/DS.PromiseObject.html) to make it easy to access the image content.


## Installation

Ember Cli Base64 Converter works in Ember **1.13.9+** or **2.0+**, including beta and canary, with no deprecations
whatsoever.


As any other ember-cli addon, run:
```
ember install ember-cli-base64-converter
```

## Using it as an Ember macro

**controllers/user.js**
```javascript
  import Ember from "ember";
  import toBase64 from "ember-cli-base64-converter/computed/img-to-64";

  export default Ember.Controller.extend({
    avatarUrl: 'https://graph.facebook.com/563248518/picture',
    avatarBase64: toBase64('avatarUrl')
  });
```
## Using it as a Service

**controllers/user.js**
```javascript
  import Ember from "ember";

  export default Ember.Controller.extend({
    avatarUrl: 'https://graph.facebook.com/563248518/picture',
    
    avatarBase64: Ember.computed('avatarUrl', {
      get() {
        return this.get('base64converter').convert(this.get('avatarUrl'));
      }
    })
  });
```

Later you just have to access the property in the template 

**templates/user.hbs**

```html
<img src={{avatarBase64}} />
```

## Cors ¬¬
