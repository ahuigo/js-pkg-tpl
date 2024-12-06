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
    width={150}
    options={options}
    initialValue={props.initialValue}
    fieldProps={{
      mode: 'multiple',
      showSearch: true,
      placeholder: '*模糊wildcard搜索*',
      optionFilterProp: 'label', // This is needed to make the search work with label
      notFoundContent: loading ? <Spin size="small" /> : null, // Add this line
      onSearch: (v: string) => {
        console.log(v);
      },
      onInputKeyDown: (e) => {
        const target = e.target as HTMLInputElement;
        console.log({ 'k': e.key, v: target.value });
        if (e.key === 'Enter') {
          e.stopPropagation(); // <-- this is the trick
          //@ts-ignore
          addOption(e.target.value);
        }
      }
    }}
  />;
};