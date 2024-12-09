import * as React from 'react';
import "./tests/mocks";
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { ProForm, } from "@ant-design/pro-components";
import { ProFormSelectStored } from './ProFormSelectStored';

const props = {
  name: 'test',
  api_key: 'test',
  value: 'frame',
  label: 'Frame1',
  initialValue: ['frame1'],
  onChange: jest.fn(),
};

function RenderProFormSelectStored() {
  return (<ProForm>
    <ProFormSelectStored {...props} />
  </ProForm>);
}
it('renders correctly with given props', async () => {
  const rtn = render(<RenderProFormSelectStored />);
  // console.log(rtn);
  expect((await screen.queryAllByText('Frame1'))[0]).toBeInTheDocument();
  expect((await rtn.queryAllByText('Frame1'))[0]).toBeInTheDocument();
  // expect(await screen.queryByText('Frame1')).toBeVisible();
});