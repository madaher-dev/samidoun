import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alerts from './components/layout/Alerts';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import store from './Store';
import { Provider } from 'react-redux';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#fafafa',
      dark: '#c7c7c7',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ff6052',
      main: '#d42628',
      dark: '#9b0000',
      contrastText: '#ffffff',
    },
  },
});

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Fragment>
              <Navbar />
              <Alerts />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
              </Switch>
              <Footer />
            </Fragment>
          </Router>
        </MuiThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
