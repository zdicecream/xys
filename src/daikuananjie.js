import './App.css';
import React from 'react';
import { Input,Button,Select, Table } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const columns = [
      {
        title: '贷款期限',
        dataIndex: 'qixian',
        key: 'qixian'
      },
      {
        title: '贷款金额',
        dataIndex: 'benjin',
        key: 'benjin'
      },
      {
        title: '贷款利率（%）',
        dataIndex: 'lilv',
        key: 'lilv'
      },
      {
        title: '还款方式',
        dataIndex: 'fangshi',
        key: 'fangshi'
      },
      {
        title: '利息总额',
        dataIndex: 'lixi',
        key: 'lixi'
      },
      {
        title: '还款总额',
        dataIndex: 'zonge',
        key: 'zonge'
      },
    ]
    const columns1 = [
      {
        title: '年限',
        dataIndex: 'nianxian',
        key: 'nianxian'
      },
      {
        title: '还款期数',
        dataIndex: 'qishu',
        key: 'qishu'
      },
      {
        title: '本期应还本金',
        dataIndex: 'benqibenjin',
        key: 'benqibenjin'
      },
      {
        title: '本期应还利息',
        dataIndex: 'benqilixi',
        key: 'benqilixi'
      },
      {
        title: '每期还款额',
        dataIndex: 'benqijine',
        key: 'benqijine'
      },
      {
        title: '贷款余额',
        dataIndex: 'yue',
        key: 'yue'
      },
    ]
    const res = this.props.props;

    let bqje= (parseFloat(res.benjin)*parseFloat(res.lilv/12/100)*(1+parseFloat(res.lilv/12/100))**(res.qixian*12))/(((1+parseFloat(res.lilv/12/100))**(res.qixian*12))-1)
    let zonge1 = bqje*res.qixian*12
    let lixi1 = zonge1-res.benjin

    const data = [
      {
        key: '1',
        qixian: res.qixian,
        benjin: res.benjin,
        lilv: res.lilv,
        fangshi: '等额本息',
        lixi: lixi1.toFixed(2),
        zonge: zonge1.toFixed(2)
      },
    ]
    const data1 = []
    let b=0;
    let yue = res.benjin;
    for(let a=1;a<=data[0].qixian*12;a++){
      if(a%12===1){
        b++;
      }
      let benqibenjin = (parseFloat(res.benjin)*parseFloat(res.lilv/12/100)*(1+parseFloat(res.lilv/12/100))**(a-1))/(((1+parseFloat(res.lilv/12/100))**(res.qixian*12))-1)
      let benqilixi = bqje - benqibenjin
      yue = yue -benqibenjin
      data1.push(
        {
          key:a,
          nianxian:b,
          qishu:a,
          benqibenjin: benqibenjin.toFixed(2),
          benqilixi:benqilixi.toFixed(2),
          benqijine: bqje.toFixed(2),
          yue:yue.toFixed(2)
      })
    }  

    return (
      <div>
        <Table columns={columns} dataSource={data} pagination={{ position: [] }}>

        </Table>
        <Table columns={columns1} dataSource={data1}>

        </Table>
      </div>
    );
  }
}


export default App;

