import React from 'react';
import { ProFormSelect } from '@ant-design/pro-components';
import { Spin, Form, Input } from 'antd';
interface Props {
  name: string;
  value: string;
  label?: string;
  initialValue: string;
  onChange: (v: string) => void;
}
const options = [{ value: 'frame', label: 'Frame' }, { value: 'frame2', label: 'Frame2' },];
export function ProFormSelectStored(props: Props) {
  const loading = false;
  return <ProFormSelect
    name={props.name}
    label={props.label}
    options={options}
    initialValue={props.initialValue}
    fieldProps={{
      mode: 'multiple',
      showSearch: true,
      placeholder: '*wildcard search*',
      optionFilterProp: 'label', // This is needed to make the search work with label
      notFoundContent: loading ? <Spin size="small" /> : null, // Add this line
      onSearch: (v: string) => {
        console.log(v);
      },
    }}
  />;
};