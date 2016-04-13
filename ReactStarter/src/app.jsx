var React = require('react');
var ReactDOM = require('react-dom');
var Firebase = require('firebase');
var ReactFire = require('reactfire');

var Header = require('./header');
var List = require('./list');

var rootUrl = 'https://boiling-fire-2379.firebaseio.com/';

var App = React.createClass({
  mixins: [ReactFire],
  getInitialState: function(){
    return {
      items: {},
      loaded: false
    }
  },
  componentWillMount: function() {
    fb = new Firebase(rootUrl + 'items/');
    this.bindAsObject(fb, 'items');
    fb.on('value', this.handleDataLoaded);
  },
  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 classname="text-center">
          TO-DO LIST
        </h2>
        <Header itemsStore={this.firebaseRefs.items}/>
        <div className={"content " + (this.state.loaded ? 'loaded' : '')}>
          <List items={this.state.items} />
        </div>
      </div>
    </div>
  },
  handleDataLoaded: function(){
    this.setState({loaded: true});
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
