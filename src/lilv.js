import './App.css';
import React from 'react';
import Image from 'rc-image';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <img alt='img' src='../lilv.png'></img>
        </div>
      </div>
    );
  }
}


export default App;

