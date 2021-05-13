/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {persistor, store} from './MyApp/Redux/store';
import AppNavigation from './MyApp/Navigation/navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
