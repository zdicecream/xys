import './App.css';
import React from 'react';
import { Input,Button,Select } from 'antd';
import Putong from './daikuanputong'
import Anjie from './daikuananjie'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      benjin:0,
      lilv:8.8,
      lixi:0,
      hankuaijine:0,
      yuexi:0,
      cishu:1,
      qixian:0,
      pa:1,
    };
     // 为了在回调中使用 `this`，这个绑定是必不可少的
     this.multiply = this.multiply.bind(this);
  }
  
  multiply(){
    this.setState(state =>({
      yuexi : parseFloat(state.benjin)*(parseFloat(state.lilv/100)/12),
      lixi : parseFloat(state.benjin)*(parseFloat(state.lilv/100))*state.qixian,
      hankuaijine : parseFloat(state.benjin)+parseFloat(state.benjin)*(parseFloat(state.lilv/100))*state.qixian
    }))
  }

  handleChange(e){
    let name = e.target.name
    this.setState({
        [name]:e.target.value
    })
  }
  handleSelectChange(e){
    let l = 1;
    let lv = 0;
    switch(e){
      case '6': l='2';lv='0'; break;
      case '1': l='1';lv='8.8'; break;
      case '2': l='1';lv='8'; break;
      default : l='1';
    }
    this.setState({
      pa: l,
      lilv: lv,
      benjin:0,
      lixi:0,
      hankuaijine:0,
      yuexi:0,
      cishu:1,
      qixian:0,
    })
  };

  Greeting(props) {
    const putong = props.putong.pa;
    if (putong==='1' || putong===1) {
      return <Putong props={props.putong} />;
    }
    return <Anjie props={props.putong}/>;
  }

  render() {
    return (
      <div>
        <div>
        贷款种类：<Select className='App-input'  onChange={(e) =>{this.handleSelectChange(e)}} style={{ width: 200 }} defaultValue="1"
          options={[
            { value: '1', label: '阜兴贷' },
            { value: '2', label: '惠农快贷' },
            { value: '4', label: '聚易贷' },
            { value: '5', label: '普通贷款' },
            { value: '6', label: '按揭贷款' },
        ]}></Select> <br/>
        贷款金额：<Input placeholder="贷款金额" className='App-input' name='benjin' value={this.state.benjin} suffix="元" onChange={(e) =>{this.handleChange(e)}}/><br/>
        贷款年利率：<Input placeholder="贷款年利率" className='App-input' name='lilv' value={this.state.lilv} suffix="%" onChange={(e) =>{this.handleChange(e)}}/><br/>
        贷款期限：<Input placeholder="贷款期限" className='App-input' name='qixian' value={this.state.qixian} onChange={(e) =>{this.handleChange(e)}}/><br/>
        <Button type="primary" className='App-button' onClick={this.multiply}>计算</Button><br/>

        <this.Greeting putong={this.state}></this.Greeting>
        </div>
      </div>
    );
  }
}


export default App;

