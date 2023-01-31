import './App.css';
import React from 'react';
import { Input,Button,Select } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>      
        还款金额：<Input placeholder="还款金额" className='App-input' suffix="元" value={this.props.props.hankuaijine.toFixed(2)}/><br/>
        还款利息：<Input placeholder="还款利息" className='App-input' suffix="元" value={this.props.props.lixi.toFixed(2)}/><br/>
        还款月息：<Input placeholder="还款月息" className='App-input' suffix="元" value={this.props.props.yuexi.toFixed(2)}/><br/>
      </div>
    );
  }
}


export default App;

