import _ from 'lodash';
import './index.css';
import ICON_FISH from './assets/shark-fish.png';
import xmlData from './assets/data.xml';
import csvData from './assets/data.csv';
import tomlData from './assets/data.toml';
import yamlData from './assets/data.yaml';
import jsonData from './assets/data.json5';
import mdData from './assets/data.md';

function component() {
  console.log('xmlData', xmlData);
  console.log('csvData', csvData);
  console.log('tomlData', tomlData);
  console.log('yamlData', yamlData);
  console.log('jsonData', jsonData);
  console.log('mdData', 'typeof mdData: ', typeof mdData, mdData);

  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'World !']);
  element.classList.add('hello');

  const image = new Image();
  image.src = ICON_FISH;
  image.width = '100';
  element.appendChild(image);

  const h2 = document.createElement('h2');
  h2.innerHTML = '哈哈，这个是苹方简的字体';
  h2.classList.add('ping-fang');
  element.appendChild(h2);

  return element;
}

document.body.appendChild(component());
