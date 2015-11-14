import Base64converter from '../services/base-64-converter';

export function initialize(container) {
  var registerKey = 'service:base64converter';
  var registerName = 'base64converter';
  var inject = container.injection.bind(container);

  container.register(registerKey, Base64converter, {singleton: true});

  inject('controller', registerName, registerKey);
  inject('component', registerName, registerKey);
  inject('model', registerName, registerKey);
  inject('route', registerName, registerKey);
  inject('adapter', registerName, registerKey);
  inject('serializer', registerName, registerKey);
}

export default {
  name: 'base-64-converter',
  initialize: initialize
};