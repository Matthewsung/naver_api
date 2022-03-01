import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/Store';
//style
import { ThemeProvider } from 'styled-components'
import theme from './styled-comonents/color'
import GlobalStyle from './styled-comonents/globalStyle'
//component
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);