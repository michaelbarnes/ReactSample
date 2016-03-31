var React = require('react');
var ThumbnailList = require('./thumbnail-list')
var options = {
  thumbnailData: [{
    title: 'Tutorials',
    number: 32,
    header: 'React',
    description: 'Javascript Framework',
    imageUrl: 'https://tleunen.github.io/react-mdl/react.svg'
  },{
    title: 'Tutorials',
    number: 25,
    header: 'Gulp',
    description: 'Speed up development',
    imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
  }]
};

// render class
var element = React.createElement(ThumbnailList, options);

// place the class in the body
ReactDOM.render(element, document.querySelector('.container'));
