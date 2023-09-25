import './App.css';
import React from 'react';
import { Input,Button,Select,  Row, Col } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      benjin:0,
      lilv:0.35,
      lixi:0,
      cishu:1,
      qixian:'一年'
    };
     // 为了在回调中使用 `this`，这个绑定是必不可少的
     this.multiply = this.multiply.bind(this);
  }
  
  multiply(){
    this.setState(state =>({
      lixi : parseFloat(state.benjin)*(1+parseFloat(state.lilv/100)/state.cishu)
    }))
  }

  handleChange(e){
    let name = e.target.name
    this.setState({
        [name]:e.target.value
    })
  }

  handleSelectChange(e){
    let c = 0
    let l = 0
    let q = 0
    switch(e){
      case '1': c='1';l='0.35';q='为什么不行';break;
      case '2': c='4';l='1.8';break;
      case '3': c='2';l='2.0';break;
      case '4': c='1';l='2.25';break;
      case '5': c='1';l='2.85';break;
      case '6': c='1';l='3.35';break;
      case '7': c='1';l='3.55';break;
      case '8': c='1';l='1.8';break;
      case '9': c='1';l='2.0';break;
      case '10': c='1';l='2.2';break;
      case '11': c='1';l='1.8';break;
      case '12': c='1';l='2.0';break;
      case '13': c='1';l='2.2';break;
      case '14': c='1';l='1.8';break;
      case '15': c='1';l='2.0';break;
      case '16': c='1';l='2.2';break;
      case '17': c='1';l='1.5';break;
      case '18': c='1';l='2.05';break;
      default: c='1';l='0';
    }
    this.setState({
        cishu: c,
        benjin:0,
        lilv:l,
        lixi:0,
        qixian:q
    })
  };

  render() {
    return (
      <div>
        <Row >
          <Col  span={24} className='App-right'>
            存款种类：<Select className='App-input' onChange={(e) =>{this.handleSelectChange(e)}} style={{ width: 200 }}  defaultValue="1"
                      options={[
                        { value: '1', label: '活期' },
                        { value: '2', label: '整存整取3个月' },
                        { value: '3', label: '整存整取6个月' },
                        { value: '4', label: '整存整取一年' },
                        { value: '5', label: '整存整取两年' },
                        { value: '6', label: '整存整取三年' },
                        { value: '7', label: '整存整取五年' },
                        { value: '8', label: '零存整取一年' },
                        { value: '9', label: '零存整取三年' }, 
                        { value: '10', label: '零存整取五年' }, 
                        { value: '11', label: '整存零取一年' },
                        { value: '12', label: '整存零取三年' }, 
                        { value: '13', label: '整存零取五年' }, 
                        { value: '14', label: '存本取息一年' },
                        { value: '15', label: '存本取息三年' }, 
                        { value: '16', label: '存本取息五年' }, 
                        { value: '17', label: '通知存款一天' }, 
                        { value: '18', label: '通知存款七天' }, 
                    ]}></Select> <br/> 
            
            本金：<Input placeholder="本金" className='App-input' name='benjin' value={this.state.benjin} suffix="元" onChange={(e) =>{this.handleChange(e)}}/><br/>
            年利率：<Input placeholder="利率" className='App-input' name='lilv' value={this.state.lilv} suffix="%" onChange={(e) =>{this.handleChange(e)}}/><br/>
            存期：<Input placeholder="存期" className='App-input' name='qixian' value={this.state.qixian}/><br/>
            <Button type="primary" className='App-button' onClick={this.multiply}>计算</Button><br/>
            本息：<Input placeholder="利息" className='App-input' suffix="元" value={this.state.lixi.toFixed(2)}/>        
          </Col>
        </Row>

      </div>
    );
  }
}


export default App;

