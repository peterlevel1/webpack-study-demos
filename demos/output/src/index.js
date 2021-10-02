import _ from 'lodash';
import print from './print';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'World !']);

  const button = document.createElement('button');
  button.innerHTML = 'Click Me';
  button.onclick = print;
  element.appendChild(button);

  return element;
}

document.body.appendChild(component());
