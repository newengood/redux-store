import React from 'react';
import { Provider } from 'react-redux';

// inject from App.js
let store;
export const injectStore = _store => {
  store = _store
}

export default function StoreProvider(props) {
    return <Provider store ={store} {...props} />;
}