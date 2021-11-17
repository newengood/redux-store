import React from 'react';
import { Provider } from 'react-redux';

// Import Redux store
import store from './store';

export default function StoreProvider(props) {
    return <Provider store ={store} {...props} />;
}