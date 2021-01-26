import { IMessageType, syncState } from '@/utils/bridge';
import FormRender from 'form-render/lib/antd';
import ImageUpload from '@/widgets/ImageUpload';

import React, { useState } from 'react';
import { useModel } from 'umi';

const App = () => {
  const { pageSchema, selectPageIndex, selectComponentId, setStateByObjectKeys } = useModel('bridge');
  const component = pageSchema[selectPageIndex].components.find((item:any)=>item.uuid === selectComponentId);
  const {generatorSchema, props} = component;
  const [valid, setValid] = useState([]);
  const [showValidate, setShowValidate] = useState(false);

  const onSubmit = () => {
    // valid 是校验判断的数组，valid 长度为 0 代表校验全部通过
    setShowValidate(true);
    if (valid.length === 0) {
    }
  };

  const onChange = (values: any) => {
    component.props = values;
    const state = {
      pageSchema: [...pageSchema],
    };
    setStateByObjectKeys(state);
    syncState({
      payload: state,
      from: 'design',
      type: IMessageType.syncState,
    });
  };

  return (
    <FormRender
      formData={props}
      onChange={onChange}
      onValidate={setValid}
      showValidate={showValidate}
      widgets={{ ImageUpload }}
      {...generatorSchema}
    />
  );
};

export default App;