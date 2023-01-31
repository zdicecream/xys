import './App.css';
import React from 'react';
import { Tabs } from 'antd';
import Daikuan from './daikuan';
import Cunkuan from './cunkuan';
import Lixizhuanhuan from './lixizhuanhuan';
import Title from './title';

function App() {
  return (
    <div className='App'>
      <Tabs className='App-header'  defaultActiveKey="1" >
        <items tab='贷款利息' key='1'>
          <Title/>
          <Daikuan/>
        </items>
        <items tab='存款利息' key='2'>
          <Title/>
          <Cunkuan/>
        </items>
        {/* <items tab='利息转换' key='3'>
          <Lixizhuanhuan/>
        </items> */}
      </Tabs>
    </div>
  );
}

export default App;




