import './App.css';
import React from 'react';
import Title from './title';
import Daikuan from './daikuan';
import Lilv from './lilv';
import Cunkuan from './cunkuan';
import { Tabs } from 'antd';


function App() {
  return (
    <div className='App'>
      <Title/>
      <Tabs className='App-header' defaultActiveKey="1" items={[
        {
          label: '贷款利息',
          key: '1',
          children: <Daikuan/>,
        },
        {
          label: '存款利息',
          key: '2',
          children: <Cunkuan/>,
        },
        {
          label: '利率表',
          key: '3',
          children: <Lilv/>,
        },
      ]}>
      </Tabs>
    </div>
  );
}

export default App;




