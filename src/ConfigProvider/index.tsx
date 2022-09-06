import React, { createContext } from 'react';

interface Config {
  prefix?: string;
}

const defaultConfig: Config = {
  prefix: 'heima-ui-lesson',
};

export const ConfigContext = createContext(defaultConfig);

function ConfigProvider() {
  return <div>ConfigProvider</div>;
}

export default ConfigProvider;
