import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../functionBased/components/Header';

describe('test quote', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot('todos');
  });
});