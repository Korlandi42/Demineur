import React from 'react';
import Grid from './Components/Grid';
import Score from './Components/Score';
import Message from './Components/Message';
import Button from './Components/ButtonNewGame';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import { store } from './redux/store'


function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{margin: '10px'}}>
        <Button/>
        <Grid/>
        <Score/>
        <Message/>
      </div>
    </Provider>
  );
}

export default App;
