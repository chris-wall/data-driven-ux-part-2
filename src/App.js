import React from 'react';
import { createStore } from './Store';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Notes from './Notes';
import ToDos from './ToDos';

const store = createStore();

const style = {
  height: '100%',
  width: '100%',
  padding: 0,
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Tabs>
        <Tab label="Notes">
          <div style={style}>
            <Notes />
          </div>
        </Tab>
        <Tab label="ToDos">
          <div style={style}>
            <ToDos />
          </div>
        </Tab>
      </Tabs>
    </Provider>
  </MuiThemeProvider>
);

export default App;
