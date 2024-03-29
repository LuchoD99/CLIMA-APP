// import { createStore, applyMiddleware, compose } from 'redux';
// import reducer from './reduce';
// import thunk from 'redux-thunk';
// const store = createStore(
//     reducer,
//     compose(
//         applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ &&
//             window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

// export default store;

//Para aplicar a todos los navegadores
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reduce';
import { composeWithDevTools } from '@redux-devtools/extension';
const store = createStore(
    reducer,
    // compose(
    //     applyMiddleware(thunk),
    //     window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //         window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
