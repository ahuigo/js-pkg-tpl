import React from 'react';
import { Spin, Form, Input } from 'antd';
import { ProFormSelect, ProFormSelectProps } from '@ant-design/pro-components';
interface ProFormSelectStoredProps extends Omit<ProFormSelectProps, 'options'> {
  /** 2. 用下划线命名，避免与标准库Props冲突？ */
  api_key: string;
  api_endpoint?: string;
  search_mode?: 'api' | 'native';// api: 通过api搜索(默认)，native: 本地搜索

}
const options = [{ value: 'frame1', label: 'Frame1' }, { value: 'frame2', label: 'Frame2' },];
export function ProFormSelectStored(props: ProFormSelectStoredProps) {
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
