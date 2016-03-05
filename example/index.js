import 'babel-polyfill';
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { MyComponent } from './../src/';

export class Root extends Component {
  render() {
    return (
        <div className="p2">
           <div className="mb4">
           	<h1 className="m0 regular">react-component-boilerplate</h1>
           	<p className="gray">Check it out on <a href="https://github.com/clintonhalpin/react-component-boilerplate">Github</a></p>
           </div>
           <MyComponent />
        </div>
    )
  }
};

render(
  <Root />,
  document.getElementById('root')
)
