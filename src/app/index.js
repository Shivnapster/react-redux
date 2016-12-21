import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/header';


var MyComponent = React.createClass({
  render: function() {
    return <div>Hello World</div>;
  }
});


ReactDOM.render(<MyComponent />, window.document.getElementById("app"));