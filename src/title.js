import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    return (
      <div>
        <img class='App-img'  src='../fp.jpg' alt='img'></img>
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

