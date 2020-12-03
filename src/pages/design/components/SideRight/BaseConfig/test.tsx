import SchemaForm, { createEffectHook, createFormActions } from '@formily/antd';
import { Input } from '@formily/antd-components';

import React from 'react';
const actions = createFormActions();
const diyHook1$ = createEffectHook('diy1');
const diyHook2$ = createEffectHook('diy2');

const App = () => {
  return (
    <SchemaForm
      components={{ Input }}
      schema={{
        type: 'object',
        properties: {
          name: {
            type: 'string',
            title: 'Name',
            'x-component': 'Input',
          },
        },
      }}
      onSubmit={(values)=>{
        console.log(values);
      }}
    >
    </SchemaForm>
  );
};

export default App;

