import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Output from './components/Output';
import ButtonContainer from './components/ButtonContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      operator: '',
      operation: '',
      start: false
    }
  }
  zero = () => {
    if(this.state.start === false) {
      this.setState({
        total: '0',
        operation: '0',
        start: true
      })
    } else {
      this.setState((prevState) => {
        return {
          operation: prevState.operation + '0',
          total: Math.floor(prevState.total + '0'),

        }
      })
    }
  }
  one = () => {
    if(this.state.start === false) {
      this.setState({
        total: '1',
        operation: '1',
        start: true
      })
    } else {
      this.setState((prevState) => {
        return {
          operation: prevState.operation + '1',
          total: Math.floor(prevState.total + '1'),

        }
      })
    }
  }
  two = () => {
    if(this.state.start === false) {
      this.setState({
        total: '2',
        operation: '2',
        start: true
      })
    } else {
      this.setState((prevState) => {
        return {
          operation: prevState.operation + '2',
          total: Math.floor(prevState.total + '2'),

        }
      })
    }
  }
  three = () => {
    if(this.state.start === false) {
      this.setState({
        total: '3',
        operation: '3',
        start: true
      })
    } else {
      this.setState((prevState) => {
        return {
          operation: prevState.operation + '3',
          total: Math.floor(prevState.total + '3'),

        }
      })
    }
  }
  four = () => {
    if(this.state.start === false) {
      this.setState({
        total: '4',
        operation: '4',
        start: true
      })
    } else {
      this.setState((prevState) => {
        return {
          operation: prevState.operation + '4',
          total: Math.floor(prevState.total + '4'),

        }
      })
    }
  }
  five = () => {
    if(this.state.start === false) {
      this.setState({
        total: '5',
        operation: '5',
        start: true
      })
    } else {
      this.setState((prevState) => {
        return {
          operation: prevState.operation + '5',
          total: Math.floor(prevState.total + '5'),

        }
      })
    }
  }
  six = () => {
    if(this.state.start === false) {
      this.setState({
        total: '6',
        operation: '6',
        start: true
      })
    } else {
      this.setState((prevState) => {
        return {
          operation: prevState.operation + '6',
          total: Math.floor(prevState.total + '6'),

        }
      })
    }
  }
  seven = () => {
    if(this.state.start === false) {
      this.setState({
        total: '7',
        operation: '7',
        start: true
      })
    } else {
      this.setState((prevState) => {
        return {
          operation: prevState.operation + '7',
          total: Math.floor(prevState.total + '7'),

        }
      })
    }
  }
  eight = () => {
    if(this.state.start === false) {
      this.setState({
        total: '8',
        operation: '8',
        start: true
      })
    } else {
      this.setState((prevState) => {
        return {
          operation: prevState.operation + '8',
          total: Math.floor(prevState.total + '8'),

        }
      })
    }
  }
  nine = () => {
    if(this.state.start === false) {
      this.setState({
        total: '9',
        operation: '9',
        start: true
      })
    } else {
      this.setState((prevState) => {
        return {
          operation: prevState.operation + '9',
          total: Math.floor(prevState.total + '9'),

        }
      })
    }
  }
  plus = () => {
    this.setState((prevState) => {
      return {
        operation: prevState.operation + '+',
        total: '0'
      }
    })
  }
  minus = () => {
    this.setState((prevState) => {
      return {
        operation: prevState.operation + '-',
        total: '0'
      }
    })
  }
  multiply = () => {
    this.setState((prevState) => {
      return {
        operation: prevState.operation + '*',
        total: '0'
      }
    })
  }
  divide = () => {
    this.setState((prevState) => {
      return {
        operation: prevState.operation + '/',
        total: '0'
      }
    })
  }
  equals = () => {
    this.setState({
      total: eval(this.state.operation),
      operation: '',
      start: false
    })
  }

  reset = () => {
    this.setState({
      total: '0',
      operation: '',
      start: false
    })
  }
  render() {
    console.log(this.state.operation)
    console.log(this.state.start)
    return (
      <View style={styles.container}>
      <Output total={this.state.total}/>
        <ButtonContainer
          one={this.one}
          two={this.two}
          three={this.three}
          four={this.four}
          five={this.five}
          six={this.six}
          seven={this.seven}
          eight={this.eight}
          nine={this.nine}
          zero={this.zero}
          plus={this.plus}
          equals={this.equals}
          reset={this.reset}
          minus={this.minus}
          multiply={this.multiply}
          divide={this.divide}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%'
  },
});
