import './App.css';
import React from 'react';
import { Input,Button } from 'antd';
import Image from 'rc-image';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    return (
      <div>
        <Image className='App-input' src='../fp.jpg'></Image>
        {/* <h1>河北省农村信用社</h1> 阜平县农村信用合作联社<br/>*/}
        <p className='App-p'>
        阜平联社   2023开门红<br/>
        存款利息高<br/>
        贷款产品多<br/>
        电子银行更给力</p>
      </div>
    );
  }
}


export default App;

