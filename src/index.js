import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './pages/App/App';
import CssBaseline from '@material-ui/core/CssBaseline'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Router><App /></Router>
  </React.StrictMode>,
  document.getElementById('root')
);
