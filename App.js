import React, { Component } from 'react';
import { PaperProvider, Text } from 'react-native-paper';

class App extends Component {
  render() {
    return {
      < PaperProvider >
          <Text>Hi</Text>
      </PaperProvider >
      
    }
  }
}

export default App
