import { createStore } from 'redux';

import {rootReducer, arrayPosts} from './reducer';

const store = createStore(rootReducer, arrayPosts);

export default store;