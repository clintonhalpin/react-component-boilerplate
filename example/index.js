import 'babel-polyfill';
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { MyComponent } from './../src/';

export class Root extends Component {
  render() {
    return (
        <div>
           <MyComponent />
        </div>
    )
  }
};

render(
  <Root />,
  document.getElementById('root')
)
