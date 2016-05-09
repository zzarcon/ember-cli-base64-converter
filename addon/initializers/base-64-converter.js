import Base64converter from '../services/base-64-converter';

export function initialize() {
  var registerKey = 'service:base64converter';
  var registerName = 'base64converter';
  
  let application = arguments[1] || arguments[0];

  application.register(registerKey, Base64converter, {singleton: true});

  application.inject('controller', registerName, registerKey);
  application.inject('component', registerName, registerKey);
  application.inject('model', registerName, registerKey);
  application.inject('route', registerName, registerKey);
  application.inject('adapter', registerName, registerKey);
  application.inject('serializer', registerName, registerKey);
}

export default {
  name: 'base-64-converter',
  initialize: initialize
};
