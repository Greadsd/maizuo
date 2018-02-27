import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

const reducers = combineReducers({
	list : function(state=[],action){
		switch(action.type){
			case "ADD_TODO_LL":
				var newState = [...state];
				newState.push(action.payload);
				return newState;
			default : 
				return state;
		}
	}
})
const store = createStore(reducers,{});

function randerPage(){
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}


randerPage()

store.subscribe(randerPage);

registerServiceWorker();
