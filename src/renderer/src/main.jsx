
import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App';
import Register from './screens/register';
import Login from './screens/login';
import Home from './screens/screen_routes/home_screen';
import Tabs from './screens/tabs';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Tabs/>
    </React.StrictMode>,
  );