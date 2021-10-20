import React from 'react';
import { Provider } from "react-redux";
import store from "./config/store";
import Navigator from './config/route.js';



//console.disableYellowBox = true



export default () => (
    <Provider store={store}>
      <Navigator />
    </Provider>
)