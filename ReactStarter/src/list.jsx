var React = require('react');

module.exports = React.createClass({
  render: function(){
    return <ul>
      {this.renderList()}
    </ul>
  },

  renderList: function(){
    if(this.props.items && Object.keys(this.props.items).length === 0){
      return <h4>
        Add an item
      </h4>
    } else {
      var children = [];
      for (var key in this.props.items){
        children.push(
          <li>
            {this.props.items[key].text}
          </li>
        )
      }

      return children;
    }
  }
});
