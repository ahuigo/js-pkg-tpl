import * as React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { ProFormSelectStored } from './ProFormSelectStored';
const props = {
  name: 'test',
  value: 'frame',
  label: 'Test Label',
  initialValue: 'frame',
  onChange: jest.fn(),
};

it('renders correctly with given props', () => {
  const { getByLabelText } = render(<ProFormSelectStored {...props} />);
  expect(getByLabelText('Test Label')).toBeInTheDocument();
});
