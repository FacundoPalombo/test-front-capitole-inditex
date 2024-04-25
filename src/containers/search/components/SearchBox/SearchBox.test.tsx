import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from './SearchBox';

describe('SearchBox unit tests', () => {
  it('should match snapshot', () => {
    const { asFragment: snap1 } = render(
      <SearchBox onChange={jest.fn()} value="123" resultsCount={2} />
    );
    expect(snap1()).toMatchSnapshot();

    const { asFragment: snap2 } = render(
      <SearchBox onChange={jest.fn()} value="321" resultsCount={2} />
    );
    expect(snap2()).toMatchSnapshot();
  });
  it('should change value when user type', async () => {
    const user = userEvent.setup();
    const onChangeStub = jest.fn();

    const { getByRole } = render(
      <SearchBox onChange={onChangeStub} value="asd" resultsCount={2} />
    );

    const searchInput = getByRole('textbox', {
      name: 'Filter over all the 100 best podcasts on itunes.',
    });
    await user.click(searchInput);
    await user.keyboard('asd');

    expect(searchInput).toHaveValue('asd');
    expect(onChangeStub).toHaveBeenCalledTimes(3);
  });
});
