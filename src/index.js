import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import App from 'grommet/components/App';
// import Header from 'grommet/components/Header';

ReactDOM.render((
  <BrowserRouter>
    <div>
    
     
      <App />
    
    </div>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
