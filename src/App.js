import React, { Component } from 'react';
import Button from './components/Button/Button';
import ProgressBar from './components/ProgressBar/ProgressBar';
import ScreenWrapper from './components/ScreenWrapper/ScreenWrapper';
import StartOver from './components/StartOver/StartOver';

import db from './firebase';

import './App.css';

const hoursRef = db.collection("hours").doc("cFdmBIOXVNHNIaTCAJ8n");
let addAnimation;

class App extends Component {

  state = {
    adminHours: 0,
    devHours: 0,
    totalHours: 0,
    addAnimation: false,
    decAnimation: false
  }

  componentWillMount() {
    hoursRef.onSnapshot(doc => {
      console.log("Current data: ", doc.data());
      this.setState({
        ...doc.data()
      })

    });
  }

  onIncrementAdminTimer() {
    hoursRef.set({
      adminHours: this.state.adminHours + 1,
      totalHours: this.state.adminHours + this.state.devHours + 1
    },
    {
      merge: true
    })
    addAnimation = 'hours';
    addAnimation = '';
  }

  onDecrementAdminTimer() {
    if (this.state.totalHours > 0 && this.state.adminHours > 0) {
      hoursRef.set({
        adminHours: this.state.adminHours - 1,
        totalHours: this.state.adminHours + this.state.devHours - 1
      },
      {
        merge: true
      });
    }
  }

  onIncrementDevTimer() {
    hoursRef.set({
      devHours: this.state.devHours + 1,
      totalHours: this.state.adminHours + this.state.devHours + 1
    },
    {
      merge: true
    });
  }

  onDecrementDevTimer() {
    if (this.state.totalHours > 0 && this.state.devHours > 0) {
      hoursRef.set({
        devHours: this.state.devHours - 1,
        totalHours: this.state.adminHours + this.state.devHours - 1
      },
      {
        merge: true
      });
    }
  }

  onStartOver() {
    hoursRef.set({
      adminHours: 0,
      devHours: 0,
      totalHours: 0
    })
  }

  render() {
    return (
      <div className="App container">
        <ProgressBar
        progressLevel={ this.state.totalHours === 0 ? 'zeroOfEight' :                          this.state.totalHours === 1 ? 'oneOfEight' :                           this.state.totalHours === 2 ? 'twoOfEight' :
                        this.state.totalHours === 3 ? 'threeOfEight' :
                        this.state.totalHours === 4 ? 'fourOfEight' :
                        this.state.totalHours === 5 ? 'fiveOfEight' :
                        this.state.totalHours === 6 ? 'sixOfEight' :
                        this.state.totalHours === 7 ? 'sevenOfEight' :
                        'eightOfEight'
                      }
        />
        <ScreenWrapper devHours={this.state.devHours}
                       adminHours={this.state.adminHours}
                       totalHours={this.state.totalHours}
        />
        <Button btnLabel="Dev"
                labelClass="btnLabelDev"
                decValue={() => this.onDecrementDevTimer()}
                incValue={() => this.onIncrementDevTimer()}
                animationClassDev={addAnimation}
        />
        <Button btnLabel="Admin"
                labelClass="btnLabelAdmin"
                decValue={() => this.onDecrementAdminTimer()}
                incValue={() => this.onIncrementAdminTimer()}
        />
        <StartOver startOver={() => this.onStartOver()} />
      </div>
    );
  }
}

export default App;
