import React from 'react';
import renderer from 'react-test-renderer';

import Card from './Card.component';

const mockStore = configureMockStore([thunk]);

describe('Card', () => {
  it('should render card component with white background color', () => {
    const store = mockStore({
      themeReducer: {theme: false},
    });
    const wrapper = renderer
      .create(
        <Provider store={store}>
          <Card />
        </Provider>,
      )
      .toJSON();

    const borderColor = wrapper.props.style.backgroundColor;
    expect(borderColor).toEqual('#FFF');
  });

  it('should render card component with black background color', () => {
    const store = mockStore({
      themeReducer: {theme: true},
    });
    const wrapper = renderer
      .create(
        <Provider store={store}>
          <Card />
        </Provider>,
      )
      .toJSON();

    const borderColor = wrapper.props.style.backgroundColor;
    expect(borderColor).toEqual('#000');
  });
});
