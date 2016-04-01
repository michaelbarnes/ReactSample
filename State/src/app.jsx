var React = require('react');
var DropDown = require('./dropdown')
var options = {
  title: 'Select Module',
  items: ['JS', 'CSS']
};

// render class
var element = React.createElement(DropDown, options);

// place the class in the body
ReactDOM.render(element, document.querySelector('.container'));
