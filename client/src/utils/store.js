// Creates a Redux store that holds the staet of the app.
import { createStore } from 'redux';

// Import new reducer file
// If errors, try importing reducer function directly
import reducers from './reducers';


export default createStore(reducers);