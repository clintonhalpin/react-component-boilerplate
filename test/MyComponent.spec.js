import 'babel-polyfill';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { MyComponent } from './../lib/';

function setup() {
  let renderer = TestUtils.createRenderer();
  renderer.render(<MyComponent />)
  let output = renderer.getRenderOutput();

  return {
    output,
    renderer
  }
}

describe('components', () => {
  describe('Header', () => {
    it('should render', () => {
      const { output } = setup();
      expect(output.type).toBe('div');
    });
  })
})