var React = require('react');
var ReactDOM = require('react-dom');
var Firebase = require('firebase');
var ReactFire = require('reactfire');

var Header = require('./header');

var rootUrl = 'https://boiling-fire-2379.firebaseio.com/';

var App = React.createClass({
  mixins: [ReactFire],
  componentWillMount: function() {
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
  },
  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 classname="text-center">
          TO-DO LIST
        </h2>
        <Header />
      </div>
    </div>
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));